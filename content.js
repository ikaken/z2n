
var interval;

let count = 0;
let msgcount = 0;
let msgtext = "";

console.log("content.js ver 02");


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // debugger;

    console.log("var 46");

    if (request.method === "sndmsg") {
      console.log("get message");
    }

    if (request.method === "opencommentpage") {


      console.log("setInterval");

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

          chrome.runtime.sendMessage({
            method: "sndmsg",
            text: msgtext
          });

        }

      }, 1000);

    }


  }
);
