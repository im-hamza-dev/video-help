console.log('Content script loaded');

// Simple message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in content script', request);
  sendResponse({ status: 'received' });
});