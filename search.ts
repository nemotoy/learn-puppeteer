import puppeteer from 'puppeteer'

const main = async () => {
  const browser = await puppeteer.launch({ args: ['--lang=ja'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  // URLを開く。
  await page.goto('https://www.amazon.com')
  // www.amazon.comのセレクタ（第一引数）に、文字列（第二引数）を入力する。
  await page.type('#twotabsearchtextbox', 'oreilly')
  // セレクタ（第一引数）をクリックする。
  await page.click('input.nav-input')
  // ミリ秒待つ。 TODO: waitForSelectorで置き換える。
  await page.waitFor(3000)
  const mil = new Date().getMilliseconds().toString()
  const file_name = 'search' + '-' + mil + '.png'
  await page.screenshot({ path: './data/' + file_name })
  await browser.close()
}

void main()
