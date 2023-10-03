const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/website/index.html');
  await page.setViewport({ width: 1200, height: 1400});
  await page.screenshot({ path: 'Test-img/img-test.jpg' });
  console.log('Image taken successfully.');
  await browser.close();
})();