chrome.runtime.onMessage.addListener(function (message) {
  console.log(message.method + " : " + message.text + " => background var 15");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs.length);
    console.log(tabs);

    chrome.tabs.sendMessage(tabs[0].id, {
      method: "sndmsg",
      text: message.text
    }, function (response) {
      console.log(response);
    });

  });

});
