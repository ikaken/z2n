var interval;
let msgcount = 0;
let msgtext = "";

console.log("content.js ver 05");

//popup.jsからのメッセージで発火
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    console.log("var 52");

    if (request.method === "openCommentPage") {
      console.log("setInterval 01");

      clearInterval(interval);
      //チャットメッセージ取得処理（定期実行）
      interval = setInterval(() => {
        const query = document.querySelectorAll('.chat-message-text-content');  //メッセージの履歴取得（複数）
        console.log(query.length);    //メッセージの数
        if (msgcount != query.length) {   //新しいメッセージが入ったら
          msgtext = query[query.length - 1].textContent;    //最後のメッセージのテキストを取得
          msgcount = query.length;    //メッセージ数（カウント）を更新
          //データをstorageへ保存
          chrome.storage.local.set({ sndmsg: msgtext }, function () {
            console.log('storage local set ver 02 => ' + msgtext);
          });
        }
      }, 1000); //チャット取得間隔（1000ミリ秒）

    }

  }
);
