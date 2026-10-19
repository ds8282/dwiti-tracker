// 1. A watchdog: if the app hasn't appeared after a while, show what went wrong and a Reload button
//    instead of an empty screen (a Home Screen app has no browser reload button).
(function () {
  var problems = [];
  window.addEventListener('error', function (e) {
    problems.push((e && (e.message || (e.target && (e.target.src || e.target.href)))) || 'error');
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var r = e && e.reason;
    problems.push((r && (r.message || String(r))) || 'rejection');
  });
  function check() {
    if (window.__dwitiReady || document.getElementById('dwiti-watchdog')) return;
    var box = document.createElement('div');
    box.id = 'dwiti-watchdog';
    box.setAttribute('style', 'position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:32px;text-align:center;font:16px/1.4 -apple-system,system-ui,sans-serif;color:' + (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? '#EADCE6' : '#5B4A57') + ';background:inherit');
    var msg = document.createElement('p');
    msg.textContent = 'The app is taking longer than usual to open.';
    var btn = document.createElement('button');
    btn.textContent = 'Reload';
    btn.setAttribute('style', 'font:600 17px -apple-system,system-ui,sans-serif;padding:14px 32px;border:0;border-radius:999px;background:#B5577F;color:#fff');
    btn.onclick = function () { location.reload(); };
    box.appendChild(msg);
    box.appendChild(btn);
    if (problems.length) {
      var d = document.createElement('p');
      d.setAttribute('style', 'font-size:12px;opacity:.7;word-break:break-all;-webkit-user-select:text;user-select:text');
      d.textContent = problems.slice(0, 3).join(' | ');
      box.appendChild(d);
    }
    document.body.appendChild(box);
  }
  window.addEventListener('load', function () { setTimeout(check, 20000); });
})();

// 2. Registers the offline worker so the app opens without an internet connection.
(function () {
  if (!('serviceWorker' in navigator)) return;
  var local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (location.protocol !== 'https:' && !local) return;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/dwiti-tracker/sw.js', { scope: '/dwiti-tracker/' }).catch(function () {});
  });
})();
