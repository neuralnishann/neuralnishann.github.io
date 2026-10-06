(function () {
  var allowedTags = new Set(["INPUT", "TEXTAREA"]);
  var allowedRoles = new Set(["textbox", "searchbox"]);

  function isEditableTarget(target) {
    if (!target || target.nodeType !== 1) {
      return false;
    }

    if (target.isContentEditable) {
      return true;
    }

    if (allowedTags.has(target.tagName)) {
      return true;
    }

    var role = target.getAttribute("role");
    return role ? allowedRoles.has(role) : false;
  }

  function blockEvent(event) {
    if (isEditableTarget(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  function blockProtectedShortcut(event) {
    var key = (event.key || "").toLowerCase();
    var ctrlOrMeta = event.ctrlKey || event.metaKey;
    var blockedCtrlKeys = new Set(["a", "c", "i", "p", "s", "u", "x"]);

    if (isEditableTarget(event.target)) {
      return;
    }

    if (event.key === "F12") {
      blockEvent(event);
      return;
    }

    if (ctrlOrMeta && blockedCtrlKeys.has(key)) {
      blockEvent(event);
      return;
    }

    if (ctrlOrMeta && event.shiftKey && (key === "i" || key === "j" || key === "c")) {
      blockEvent(event);
    }
  }

  function markProtectedDocument() {
    document.documentElement.classList.add("content-protected");
  }

  document.addEventListener("DOMContentLoaded", markProtectedDocument);
  markProtectedDocument();

  document.addEventListener("copy", blockEvent, true);
  document.addEventListener("cut", blockEvent, true);
  document.addEventListener("contextmenu", blockEvent, true);
  document.addEventListener("dragstart", blockEvent, true);
  document.addEventListener("selectstart", blockEvent, true);
  document.addEventListener("keydown", blockProtectedShortcut, true);
})();
