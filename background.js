chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  // FIXME
  // chrome.browserAction.setBadgeText('12345', function () {
  //   console.log('set badge text');
  // });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    console.log('toto');
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});