# z2n
z2n(ZoomChat to nicoCome).<br>
Display zoom chat messages like comments on Nico Nico Douga.

Chromeの拡張機能です。<br>
Web版Zoomのチャットを取得し、グリーンバックのページにニコ動風コメントを流します。

## 使い方
１）Chrome拡張機能のデベロッパーモードを有効にする<br>
２）「パッケージ化されていない拡張機能」でz2nを読み込む<br>
３）ZoomミーティングにChromeで参加する<br>
４）チャットをオンにする<br>
５）拡張機能一覧からz2nをクリック<br>
６）「コメントページを開く」ボタンをクリック（グリーンバックのページが開きます）<br>
７）別のZoomクライアントからコメントを入力する<br>

※グリーンバックのページは常にアクティブにしておいて下さい。

## カスタム

グリーンバックページの設定（文字サイズとか）

「manifest.json」と「popup.js」にある"https://test.ikaken.com/content2.html"を任意のファイルに換えることでグリーンバックページのカスタムが可能です。
