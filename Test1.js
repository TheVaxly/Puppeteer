const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.goto('http://127.0.0.1:5500/website/contact.html');
  await page.setViewport({ width: 1200, height: 950});

  await page.type('#name', 'John Doe'); 
  await page.type('#email', 'johndoe@example.com'); 
  await page.type('#message', 'This is a test message'); 


  await page.click('button[type="submit"]');

  await page.waitForSelector('.confirmation'); 

  await page.screenshot({ path: 'Test-img/contact-form-submitted.png' });

  console.log('Contact form submitted successfully.');

  await browser.close();
})();

