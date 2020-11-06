chrome.webRequest.onBeforeRequest.addListener((details) => {
  if (details.type === 'ping' && details.requestBody.error) {
      console.error(`the error lies in this request: ${details.url}`);
  }
}, { urls: ['<all_urls>'] }, ['requestBody']);


