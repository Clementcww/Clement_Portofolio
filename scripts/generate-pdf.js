const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1200, height: 1000 });
  
  console.log('Navigating to local site...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });
  
  // Wait a little extra for animations
  await new Promise(r => setTimeout(r, 2000));
  
  console.log('Generating PDF...');
  const outputPath = path.join(__dirname, '../public/Clement_Portfolio.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });

  console.log('PDF saved to ' + outputPath);
  await browser.close();
})();
