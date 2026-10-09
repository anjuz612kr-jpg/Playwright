/*const { test, expect } = require("@playwright/test");
const ExcelJS = require("exceljs");

test("excel download-update-upload", async ({ page }) => {

    await page.goto("https://selenium.qabible.in/index.php");
    await page.getByRole("link", { name: "Table" }).click();
    await page.locator(".nav-link").nth(3).click();
    await page.locator(".list-group-item").nth(3).click();
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Excel" }).click();
    const download = await downloadPromise;
    console.log("Downloaded file:", download.suggestedFilename());
    const filePath ="D:/PLAYWRIGHT/downloads/" + download.suggestedFilename();
    await download.saveAs(filePath);
    console.log("Excel downloaded successfully");
    console.log("File path:", filePath);
    await writeExcelFile(filePath,"Airi Satou","Anjumol");
    console.log("Excel file updated successfully");
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles(filePath);
    console.log("File selected for upload");
    await page.locator("#file-submit").click();  
    expect(page.getByText("File Uploaded!")).toBeVisible()
    console.log("Excel uploaded successfully");
    //await page.pause();
});

async function writeExcelFile(filePath,searchValue,changeValue)
{
    const workBook=new ExcelJS.Workbook()
    await workBook.xlsx.readFile(filePath)
    const workSheet=workBook.getWorksheet('Sheet1')
    const output=await readExcelFile(workSheet,searchValue)
    const cell=workSheet.getCell(output.row,output.col)
    cell.value=changeValue
    await workBook.xlsx.writeFile(filePath)
}

async function readExcelFile(workSheet,searchValue)
{
    //creating excel workbook object
    let output={row:-1,col:-1}
    workSheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>
                {
                //console.log(cell.value)
                if(cell.value===searchValue)
                    {
                        output.row=rowNumber
                        output.col=colNumber
                    }
                })
        }
        )
        return output
}
        */
