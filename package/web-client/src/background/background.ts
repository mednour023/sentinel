chrome.runtime.onInstalled.addListener(() => {
  console.log("testing");
});


chrome.bookmarks.onCreated.addListener(function(test,b) {
  console.log('its booked',b)
});