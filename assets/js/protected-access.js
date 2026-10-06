(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function randomCode() {
    var alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    var code = "";
    for (var i = 0; i < 6; i += 1) {
      code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return code;
  }

  function normalizeInput(value) {
    return (value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function renderCaptchaCode(container, code) {
    var skewA = randomBetween(-8, 8).toFixed(2) + "deg";
    var skewB = randomBetween(-6, 6).toFixed(2) + "deg";
    var rotate = randomBetween(-2.5, 2.5).toFixed(2) + "deg";
    var lineA = randomBetween(18, 42).toFixed(2) + "%";
    var lineB = randomBetween(56, 82).toFixed(2) + "%";

    container.innerHTML = "";
    container.style.setProperty("--captcha-skew-a", skewA);
    container.style.setProperty("--captcha-skew-b", skewB);
    container.style.setProperty("--captcha-rotate", rotate);
    container.style.setProperty("--captcha-line-a-top", lineA);
    container.style.setProperty("--captcha-line-b-top", lineB);

    for (var i = 0; i < code.length; i += 1) {
      var glyph = document.createElement("span");
      glyph.className = "protected-access__glyph";
      glyph.textContent = code.charAt(i);
      glyph.style.transform =
        "translateY(" + randomBetween(-7, 7).toFixed(2) + "px) " +
        "rotate(" + randomBetween(-28, 28).toFixed(2) + "deg)";
      glyph.style.fontSize = randomBetween(1.05, 1.45).toFixed(2) + "em";
      glyph.style.opacity = randomBetween(0.58, 0.92).toFixed(2);
      glyph.style.filter =
        "blur(" + randomBetween(0.2, 1.4).toFixed(2) + "px) " +
        "contrast(" + randomBetween(0.9, 1.25).toFixed(2) + ")";
      glyph.style.marginLeft = i === 0 ? "0" : randomBetween(0.03, 0.18).toFixed(2) + "em";
      container.appendChild(glyph);
    }
  }

  function isExternalUrl(url) {
    try {
      return new URL(url, window.location.href).origin !== window.location.origin;
    } catch (error) {
      return false;
    }
  }

  ready(function () {
    var root = document.querySelector(".js-protected-access");
    if (!root) {
      return;
    }

    var countdownValue = root.querySelector("[data-countdown-value]");
    var challengeCode = root.querySelector("[data-challenge-code]");
    var challengeInput = root.querySelector("[data-challenge-input]");
    var acknowledge = root.querySelector("[data-acknowledge]");
    var honeypot = root.querySelector("[data-honeypot]");
    var proceedButton = root.querySelector("[data-proceed-button]");
    var refreshButton = root.querySelector("[data-refresh-button]");
    var status = root.querySelector("[data-status]");

    var protectedUrl = root.getAttribute("data-protected-url");
    var protectedMode = root.getAttribute("data-protected-mode") || "view";
    var protectedAction = root.getAttribute("data-protected-action") || "Continue";
    var attemptKey = "protected-access:" + window.location.pathname;
    var currentCode = "";
    var countdown = 4;
    var countdownTimer = null;
    var lockMessageTimer = null;

    function readLockState() {
      try {
        return JSON.parse(localStorage.getItem(attemptKey) || "{}");
      } catch (error) {
        return {};
      }
    }

    function writeLockState(data) {
      localStorage.setItem(attemptKey, JSON.stringify(data));
    }

    function setStatus(message, type) {
      status.textContent = message || "";
      status.className = "protected-access__status" + (type ? " is-" + type : "");
    }

    function isLocked() {
      var state = readLockState();
      return state.lockUntil && state.lockUntil > Date.now();
    }

    function updateLockMessage() {
      if (!isLocked()) {
        return false;
      }

      var state = readLockState();
      var remaining = Math.max(1, Math.ceil((state.lockUntil - Date.now()) / 1000));
      proceedButton.disabled = true;
      setStatus("Too many failed attempts. Try again in " + remaining + "s.", "error");
      return true;
    }

    function stopLockMessageTimer() {
      if (lockMessageTimer) {
        window.clearInterval(lockMessageTimer);
        lockMessageTimer = null;
      }
    }

    function startLockMessageTimer() {
      stopLockMessageTimer();
      if (!isLocked()) {
        return;
      }

      lockMessageTimer = window.setInterval(function () {
        if (!updateLockMessage()) {
          stopLockMessageTimer();
          updateProceedState();
        }
      }, 1000);
    }

    function registerFailure() {
      var state = readLockState();
      state.failures = (state.failures || 0) + 1;
      if (state.failures >= 3) {
        state.lockUntil = Date.now() + 5 * 60 * 1000;
        state.failures = 0;
      }
      writeLockState(state);
    }

    function registerSuccess() {
      writeLockState({});
    }

    function updateProceedState() {
      if (updateLockMessage()) {
        startLockMessageTimer();
        return;
      }

      var readyToProceed = countdown <= 0 &&
        acknowledge.checked &&
        !honeypot.value;

      proceedButton.disabled = !readyToProceed;
      if (!readyToProceed && !status.textContent) {
        setStatus("Complete the wait time and checkbox, then submit the captcha.", "");
      }
    }

    function refreshChallenge() {
      currentCode = randomCode();
      renderCaptchaCode(challengeCode, currentCode);
      challengeInput.value = "";
      acknowledge.checked = false;
      stopLockMessageTimer();
      if (!isLocked()) {
        setStatus("", "");
      }
      countdown = 4;
      countdownValue.textContent = countdown + "s";
      proceedButton.textContent = protectedAction;

      if (countdownTimer) {
        window.clearInterval(countdownTimer);
      }

      countdownTimer = window.setInterval(function () {
        countdown -= 1;
        countdownValue.textContent = Math.max(0, countdown) + "s";
        if (countdown <= 0) {
          window.clearInterval(countdownTimer);
          countdownTimer = null;
          setStatus("Challenge ready.", "success");
        }
        updateProceedState();
      }, 1000);

      updateProceedState();
      challengeInput.focus();
    }

    function proceed() {
      registerSuccess();
      setStatus("Opening protected resource...", "success");

      if (protectedMode === "download") {
        var downloadLink = document.createElement("a");
        downloadLink.href = protectedUrl;
        downloadLink.rel = "noopener noreferrer";
        downloadLink.download = "";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        return;
      }

      if (isExternalUrl(protectedUrl)) {
        window.open(protectedUrl, "_blank", "noopener,noreferrer");
        return;
      }

      window.location.assign(protectedUrl);
    }

    challengeInput.addEventListener("input", function () {
      challengeInput.value = normalizeInput(challengeInput.value);
      setStatus("", "");
      updateProceedState();
    });

    acknowledge.addEventListener("change", updateProceedState);

    challengeInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!proceedButton.disabled) {
          proceedButton.click();
        }
      }
    });

    refreshButton.addEventListener("click", refreshChallenge);

    proceedButton.addEventListener("click", function () {
      if (updateLockMessage()) {
        return;
      }

      if (honeypot.value) {
        setStatus("Access denied.", "error");
        return;
      }

      if (normalizeInput(challengeInput.value) !== currentCode) {
        registerFailure();
        currentCode = randomCode();
        renderCaptchaCode(challengeCode, currentCode);
        setStatus("Captcha code does not match.", "error");
        if (isLocked()) {
          startLockMessageTimer();
          updateLockMessage();
        }
        challengeInput.focus();
        challengeInput.select();
        updateProceedState();
        return;
      }

      if (!acknowledge.checked || countdown > 0) {
        setStatus("Complete the protection check first.", "error");
        updateProceedState();
        return;
      }

      proceed();
    });

    refreshChallenge();
  });
})();
