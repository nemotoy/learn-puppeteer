import puppeteer from 'puppeteer'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  const lang = 'go' // TODO: enable inputting from callers
  const date_range = 'week'
  const qs_since = 'since=' + date_range
  const url = 'https://github.com/trending/' + lang + '?' + qs_since // TODO: implement function
  console.log(url)

  await page.goto(url) // TODO: get repository URL
  await page.waitFor(3000)
  const mil = new Date().getMilliseconds().toString()
  const file_name = 'search' + '-' + lang + '-' + date_range + '' + mil + '.png'
  await page.screenshot({
    path: './data/gh/' + file_name,
    fullPage: true,
  })
  await browser.close()
}

void main()
