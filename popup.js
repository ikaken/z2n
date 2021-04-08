document.addEventListener('DOMContentLoaded', function () {

  var commentpage = document.getElementById('opencommentpage');
  commentpage.addEventListener('click', () => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { method: "opencommentpage" });
      console.log(tabs[0].id);

      chrome.tabs.create({ url: "https://test.ikaken.com/content2.html" }, (tab) => {
      });

    });
  }, false);

}, false);
