document.addEventListener('DOMContentLoaded', function () {

  //ボタンが押された処理
  var commentpage = document.getElementById('openCommentPage');
  commentpage.addEventListener('click', () => {
    //アクティブタブのコンテンツスクリプトへメッセージを送る
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { method: "openCommentPage" });
      //グリーンバック用のページを開く
      chrome.tabs.create({ url: "https://test.ikaken.com/content2.html" }, (tab) => {
      });
    });
  }, false);

}, false);
