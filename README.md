# z2n
z2n(ZoomChat to nicoCome).<br>
Display zoom chat messages like comments on Nico Nico Douga.

Chromeの拡張機能です。<br>
Web版Zoomのチャットを取得し、グリーンバックのページにニコ動風コメントを流します。<br>
OBSのクロマキー合成などでお使い下さい。

## 使い方
１）Chrome拡張機能のデベロッパーモードを有効にする<br>
２）「パッケージ化されていない拡張機能」でz2nを読み込む<br>
３）ZoomミーティングにChromeで参加する<br>
４）チャットをオンにする<br>
５）拡張機能一覧からz2nをクリック<br>
６）「コメントページを開く」ボタンをクリック（グリーンバックのページが開きます）<br>
７）別のZoomクライアントからコメントを入力する<br>


## カスタム

### グリーンバックページの設定（文字サイズとか）<br>
「manifest.json」と「popup.js」にある<br>
「 https://test.ikaken.com/content2.html 」の部分を、<br>
任意のファイルに換えることでグリーンバックページのカスタムが可能です。<br>

## 謝辞

テキストアニメーション部分はこちらのソースをお借りしました。

実質20行ほどでニコニコ動画風のコメント表示機能を作る 〜素の JavaScript とアニメーション用ライブラリ（GSAP）を利用〜<br>
https://qiita.com/youtoy/items/051dc658025a3b21c7f0
