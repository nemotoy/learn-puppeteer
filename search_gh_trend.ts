import puppeteer from 'puppeteer'

const trend_url = 'https://github.com/trending/'
const since_key = 'since'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  const lang = 'go' // TODO: enable inputting from callers
  const date_range = 'week'
  const url = generateTrendURL(lang, date_range)
  console.log(url)

  await page.goto(url) // TODO: get repository URL
  await page.waitFor(3000)
  const mil = new Date().getMilliseconds().toString()
  const file_name = generateFileName(lang, date_range, mil) + '.png'
  await page.screenshot({
    path: './data/gh/' + file_name,
    type: 'png',
    fullPage: true,
  })
  await browser.close()
}

void main()

const generateTrendURL = (lang: string, date_range: string) => {
  return trend_url + lang + '?' + since_key + '=' + date_range
}

const generateFileName = (...items: string[]) => {
  return items.join('-')
}
