import {test,expect} from "@playwright/test";
import ExcelJS from "exceljs";

test("FLIPKART", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.getByText("Home").first().click();
    await page.locator('.css-g5y9jx > div:nth-child(2) > .css-g5y9jx > div > div > ._3n8fna1co').first().click();
    await page.locator("//div[@class='ybaCDx']").first().click();
    await page.getByText("Price -- Low to High").first().click();
    await page.getByTitle("LAZYwindow Iron Tadka Pan and Foldable Plastic Whisker Hand Blender Mixer Tadka Pan 12 cm diameter 0.5 L capacity").first().click();
    const price = await page.locator("//div[contains(text(),'₹')]").nth(6).textContent();
    const [page2]=await Promise.all([
    page.waitForEvent('popup'),
    page.locator('(//*[@class="UCc1lI"])[5]').click()
    ]);
    expect(price).not.toBeNull();
    expect(price).not.toBe("");
    expect(price).toContain("₹");
    console.log(price);
    const title=await page2.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]').textContent();
    expect(page2).not.toBeNull();
    expect(title).not.toBeNull();
    console.log(title);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("C:/Users/91944/Desktop/PLAYWRIGHT/DDT/Excel4.xlsx");
    const worksheet = workbook.getWorksheet("Sheet1");
    worksheet.getRow(1).getCell(1).value = title;
    worksheet.getRow(2).getCell(1).value = price;
    await workbook.xlsx.writeFile("C:/Users/91944/Desktop/PLAYWRIGHT/DDT/Excel4.xlsx");
    console.log("Data written to Excel successfully");
});