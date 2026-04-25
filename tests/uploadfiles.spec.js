import {test} from '@playwright/test';
// test('upload files', async ({page}) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     await page.locator('#singleFileInput').setInputFiles('C:/Users/91944/Desktop/PLAYWRIGHT/tests/demo.txt');
//     await page.getByRole('button', {name: 'Upload Single File'}).click();
//     await page.waitForTimeout(2000);
// })   

// test('upload files', async ({page}) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/91944/Desktop/PLAYWRIGHT/tests/demo.txt', 'C:/Users/91944/Desktop/PLAYWRIGHT/tests/demo1.txt']);
//     await page.getByRole('button', {name: 'Upload Multiple Files'}).click();
//     await page.waitForTimeout(2000);
// });   

// test('upload files', async ({page}) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const  THEPATH = path.join(__dirname, 'demo.txt');
//     await page.locator('#singleFileInput').setInputFiles(THEPATH);
//     await page.getByRole('button', {name: 'Upload Single File'}).click();
//     await page.waitForTimeout(2000);
// });

