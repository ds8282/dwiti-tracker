// Registers the offline worker so the app opens without an internet connection.
(function () {
  if (!('serviceWorker' in navigator)) return;
  var local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (location.protocol !== 'https:' && !local) return;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/dwiti-tracker/sw.js', { scope: '/dwiti-tracker/' }).catch(function () {});
  });
})();
