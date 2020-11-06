if ('sendBeacon' in navigator) {
  window.addEventListener('load', function() {
    navigator.sendBeacon(
      'https://really-doesnt-matter-anyway.fake/0',
      'text sent');
    navigator.sendBeacon(
      'https://really-doesnt-matter-anyway.fake/1',
      { data: 'object sent' });
    navigator.sendBeacon(
      'https://really-doesnt-matter-anyway.fake/2',
      JSON.stringify({ data: 'stringified object sent' }));
    navigator.sendBeacon(
      'https://really-doesnt-matter-anyway.fake/3',
      new Blob([JSON.stringify({ data: 'stringified object sent' })], { type: 'application/json' }));
  }, false);
}
