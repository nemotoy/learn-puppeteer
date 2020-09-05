# knowledge

## Goal

- [x] 何ができるか
- [ ] 他のツールと比較してどうか
- [x] 周辺技術は何があるか
- [x] puppeteer vs puppeteer-core

### 何ができるか

- Webページのスクリーンショット・PDFの生成
- SPAのクローリング・プリレンダリングコンテンツ（SSR）の生成
- UIテストの自動化
- パフォーマンスのキャプチャ
- Chrome拡張のテスト

APIの構成は[Overview](https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-overview)を参考にする。

### puppeteer vs puppeteer-core

違い。通常は *puppeteer* を利用するべき

- puppeteer-coreはChromiumを自動的にダウンロードしない
- puppeteer-coreは `PUPPETEER_*` 環境変数を無視する

[puppeteer vs puppeteer-core](https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-puppeteer-vs-puppeteer-core)

## Words

- headless Chrome：ChromiumをブラウザUI環境なしに実行できる。Chromium and Blinkのモダンウェブプラットフォームの機能が使える。実行方法はCLIまたはプログラム（Node等）から。
- Chromium：OSSのWebブラウザプロジェクトの総称。（Google Chrome, Brave, Vivaldi ...)
- Blink：HTMLレンダリングエンジン。ChromiumはWebKitから変更した。
- WebKit：Appleが中心開発しているOSSのHTMLレンダリングエンジン。
- puppeteer：headless Chrome操作のNodeライブラリ。
- dev Tools Protocol：headless Chrome操作のCLIツール。

## Examples

[examples](https://developers.google.com/web/tools/puppeteer/examples)

### Details

- [puppeteer](https://github.com/puppeteer/examples)
- [puppeteer-examples](https://github.com/checkly/puppeteer-examples)

## Others

- [npm trends](https://www.npmtrends.com/cypress-vs-nightwatch-vs-puppeteer-vs-testcafe)

## Reference

- [Puppeteer](https://developers.google.com/web/tools/puppeteer)
- [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [WebKit](https://webkit.org/)
- [Blink](https://www.chromium.org/blink)
- [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)（puppeteer情報をキュレート）
