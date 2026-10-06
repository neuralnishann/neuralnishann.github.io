(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
      return;
    }
    fn();
  }

  function randomCode() {
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var code = '';
    for (var i = 0; i < 6; i++) {
      code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return code;
  }

  function normalizeInput(value) {
    return (value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function renderCaptchaCode(container, code) {
    var skewA = randomBetween(-8, 8).toFixed(2) + 'deg';
    var skewB = randomBetween(-6, 6).toFixed(2) + 'deg';
    var rotate = randomBetween(-2.5, 2.5).toFixed(2) + 'deg';
    var lineA = randomBetween(18, 42).toFixed(2) + '%';
    var lineB = randomBetween(56, 82).toFixed(2) + '%';

    container.innerHTML = '';
    container.style.setProperty('--captcha-skew-a', skewA);
    container.style.setProperty('--captcha-skew-b', skewB);
    container.style.setProperty('--captcha-rotate', rotate);
    container.style.setProperty('--captcha-line-a-top', lineA);
    container.style.setProperty('--captcha-line-b-top', lineB);

    for (var i = 0; i < code.length; i += 1) {
      var glyph = document.createElement('span');
      glyph.className = 'nav-captcha__glyph';
      glyph.textContent = code.charAt(i);
      glyph.style.transform =
        'translateY(' + randomBetween(-7, 7).toFixed(2) + 'px) ' +
        'rotate(' + randomBetween(-28, 28).toFixed(2) + 'deg)';
      glyph.style.fontSize = randomBetween(1.05, 1.45).toFixed(2) + 'em';
      glyph.style.opacity = randomBetween(0.58, 0.92).toFixed(2);
      glyph.style.filter =
        'blur(' + randomBetween(0.2, 1.4).toFixed(2) + 'px) ' +
        'contrast(' + randomBetween(0.9, 1.25).toFixed(2) + ')';
      glyph.style.marginLeft = i === 0 ? '0' : randomBetween(0.03, 0.18).toFixed(2) + 'em';
      container.appendChild(glyph);
    }
  }

  function shouldSkipHref(href) {
    return !href || href === '#' || href.indexOf('javascript:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0;
  }

  function isProtectedAccessPath(pathname) {
    return /\/credential-access\//.test(pathname || '');
  }

  function isDownloadLink(target, resolvedUrl) {
    var text = normalizeInput((target.textContent || '').replace(/\s+/g, ' '));
    if (target.hasAttribute('download')) {
      return true;
    }

    if (text.indexOf('DOWNLOAD') !== -1) {
      return true;
    }

    if (resolvedUrl && /\.(pdf|zip|docx?|xlsx?|pptx?)($|[?#])/i.test(resolvedUrl.pathname)) {
      return true;
    }

    return false;
  }

  ready(function () {
    var pendingNavigation = null;
    var challengeCode = '';
    var attemptKey = 'nav-captcha:' + window.location.pathname;
    var lockMessageTimer = null;

    var overlay = document.createElement('div');
    overlay.className = 'nav-captcha';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = '' +
      '<div class="nav-captcha__dialog" role="dialog" aria-modal="true" aria-labelledby="nav-captcha-title">' +
      '<div class="nav-captcha__eyebrow">Navigation Check</div>' +
      '<h2 id="nav-captcha-title" class="nav-captcha__title">Confirm before redirect</h2>' +
      '<p class="nav-captcha__text">Enter the captcha code shown below to continue to the next page.</p>' +
      '<div id="nav-captcha-code" class="nav-captcha__code">------</div>' +
      '<label class="nav-captcha__label" for="nav-captcha-input">Captcha code</label>' +
      '<input id="nav-captcha-input" class="nav-captcha__input" type="text" inputmode="text" autocomplete="off" spellcheck="false" maxlength="6" placeholder="Type 6 characters">' +
      '<div class="nav-captcha__actions">' +
      '<button id="nav-captcha-confirm" class="btn btn--primary nav-captcha__button" type="button">Continue</button>' +
      '<button id="nav-captcha-refresh" class="btn btn--inverse nav-captcha__button" type="button">New Code</button>' +
      '<button id="nav-captcha-cancel" class="btn btn--inverse nav-captcha__button" type="button">Cancel</button>' +
      '</div>' +
      '<p id="nav-captcha-status" class="nav-captcha__status" aria-live="polite"></p>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = document.getElementById('nav-captcha-input');
    var codeBox = document.getElementById('nav-captcha-code');
    var status = document.getElementById('nav-captcha-status');
    var confirmButton = document.getElementById('nav-captcha-confirm');
    var refreshButton = document.getElementById('nav-captcha-refresh');
    var cancelButton = document.getElementById('nav-captcha-cancel');

    function readLockState() {
      try {
        return JSON.parse(localStorage.getItem(attemptKey) || '{}');
      } catch (error) {
        return {};
      }
    }

    function writeLockState(data) {
      localStorage.setItem(attemptKey, JSON.stringify(data));
    }

    function setStatus(message, type) {
      status.textContent = message || '';
      status.className = 'nav-captcha__status' + (type ? ' is-' + type : '');
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
      confirmButton.disabled = true;
      setStatus('Too many failed attempts. Try again in ' + remaining + 's.', 'error');
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
          confirmButton.disabled = false;
          setStatus('', '');
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
      stopLockMessageTimer();
    }

    function refreshCode() {
      challengeCode = randomCode();
      renderCaptchaCode(codeBox, challengeCode);
      input.value = '';
      confirmButton.disabled = false;
      if (!isLocked()) {
        setStatus('', '');
      }
      window.setTimeout(function () {
        input.focus();
      }, 0);
      updateLockMessage();
    }

    function openModal(navigation) {
      pendingNavigation = navigation;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('nav-captcha-open');
      refreshCode();
      if (isLocked()) {
        startLockMessageTimer();
      }
    }

    function closeModal() {
      pendingNavigation = null;
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-captcha-open');
      stopLockMessageTimer();
      input.value = '';
      setStatus('', '');
    }

    function proceed() {
      var navigation = pendingNavigation;
      registerSuccess();
      closeModal();
      if (!navigation) {
        return;
      }

      if (navigation.download) {
        var downloadLink = document.createElement('a');
        downloadLink.href = navigation.url;
        downloadLink.rel = 'noopener noreferrer';
        downloadLink.download = navigation.download;
        if (navigation.target) {
          downloadLink.target = navigation.target;
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        return;
      }

      if (navigation.target && navigation.target !== '_self') {
        window.open(navigation.url, navigation.target, 'noopener,noreferrer');
        return;
      }

      window.location.assign(navigation.url);
    }

    function buildNavigation(target) {
      if (!target) {
        return null;
      }

      if (target.tagName === 'A') {
        var href = target.getAttribute('href');
        if (shouldSkipHref(href)) {
          return null;
        }

        var resolved = new URL(href, window.location.href);
        if (isProtectedAccessPath(resolved.pathname)) {
          return null;
        }
        if (resolved.hash && resolved.pathname === window.location.pathname && resolved.search === window.location.search) {
          return null;
        }

        return {
          url: resolved.toString(),
          target: target.getAttribute('target') || '_self',
          download: isDownloadLink(target, resolved) ? (target.getAttribute('download') || 'download') : ''
        };
      }

      if (target.tagName === 'BUTTON') {
        var buttonHref = target.getAttribute('data-href') || target.getAttribute('formaction');
        if (shouldSkipHref(buttonHref)) {
          return null;
        }

        return {
          url: new URL(buttonHref, window.location.href).toString(),
          target: target.getAttribute('formtarget') || '_self',
          download: ''
        };
      }

      return null;
    }

    document.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      var target = event.target.closest('a[href], button[data-href], button[formaction]');
      if (!target || overlay.contains(target) || target.hasAttribute('data-captcha-skip')) {
        return;
      }

      var navigation = buildNavigation(target);
      if (!navigation) {
        return;
      }

      event.preventDefault();
      openModal(navigation);
    }, true);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        closeModal();
      }
    });

    input.addEventListener('input', function () {
      input.value = normalizeInput(input.value);
    });

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        confirmButton.click();
      }
      if (event.key === 'Escape') {
        closeModal();
      }
    });

    confirmButton.addEventListener('click', function () {
      if (updateLockMessage()) {
        startLockMessageTimer();
        return;
      }

      if (normalizeInput(input.value) !== challengeCode) {
        registerFailure();
        challengeCode = randomCode();
        renderCaptchaCode(codeBox, challengeCode);
        setStatus('Captcha code does not match.', 'error');
        if (isLocked()) {
          startLockMessageTimer();
          updateLockMessage();
        }
        input.focus();
        input.select();
        return;
      }

      setStatus('Redirecting...', 'success');
      window.setTimeout(proceed, 120);
    });

    refreshButton.addEventListener('click', refreshCode);
    cancelButton.addEventListener('click', closeModal);
  });
})();
