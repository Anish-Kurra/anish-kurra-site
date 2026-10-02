// Builds the "Open in email" link from the note form so the visitor's email app opens with it filled in.
(function () {
  var name = document.getElementById('cf-name');
  var msg = document.getElementById('cf-msg');
  var send = document.getElementById('cf-send');
  if (!name || !msg || !send) return;
  function update() {
    var subject = 'Hello from ' + (name.value.trim() || 'your website');
    send.href = 'mailto:anishkurra@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg.value);
  }
  name.addEventListener('input', update);
  msg.addEventListener('input', update);
  update();
})();
