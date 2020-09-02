import puppeteer from 'puppeteer'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://google.com/')
  await page.screenshot({ path: './data/example.png' })

  await browser.close()
}

void main()
