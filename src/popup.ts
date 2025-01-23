document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('actionButton');
  
  button?.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.id) {
        chrome.tabs.sendMessage(
          activeTab.id, 
          { action: 'getData' }, 
          (response) => {
            console.log('Response from content script:', response);
          }
        );
      }
    });
  });
});