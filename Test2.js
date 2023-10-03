const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:5500/website/index.html');

  const pageTitle = await page.title();
  
  if (pageTitle === 'VOCO Hotel') {
    console.log('Test passed: Page title is correct.');
  } else {
    console.error('Test failed: Page title is incorrect.');
  }

  await browser.close();
})();