import puppeteer from 'puppeteer'

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // DirectNavigationOptions -> NavigationOptions -> Timeoutableで継承されている。
  // waitUntil(ref. // ref. https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagegobackoptions)
  await page.goto('https://pptr.dev/', { waitUntil: 'networkidle2' })
  page.setDefaultNavigationTimeout(3000)
  await page.pdf({ path: './data/example.pdf', format: 'A4' })

  await browser.close()
}

void main()
