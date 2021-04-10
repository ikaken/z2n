
var interval;

let count = 0;
let msgcount = 0;
let msgtext = "";

console.log("content.js ver 04");


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // debugger;

    console.log("var 51");

    //チャットメッセージ取得処理（定期実行）
    if (request.method === "opencommentpage") {

      console.log("setInterval 01");

      clearInterval(interval);
      interval = setInterval(() => {
        const query = document.querySelectorAll('.chat-message-text-content');  //メッセージの履歴取得（複数）
        console.log(query.length);    //メッセージの数
        if (msgcount != query.length) {   //新しいメッセージが入ったら
          for (let e of query) {
            console.log(e.textContent + e.id);
          }
          msgtext = query[query.length - 1].textContent;    //メッセージテキストを生成
          msgcount = query.length;    //メッセージ数（カウント）を更新

          //          chrome.runtime.sendMessage({ method: "sndmsg", text: msgtext });  //バックグランドページへメッセージ送信

          //データを保存
          chrome.storage.local.set({ sndmsg: msgtext }, function () {
            console.log('storage local set ver 02 => ' + msgtext);
          });

        }


      }, 1000);

    }


  }
);
