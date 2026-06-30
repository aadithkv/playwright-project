const Exceljs =require('exceljs')

async function writeExcelFile(searchvalue,replacetext,filepath)
{
const workbook= new Exceljs.Workbook()
await workbook.xlsx.readFile(filepath)
const worksheet= workbook.getWorksheet('Excelsheet')

const output= await readExcelFile(worksheet,searchvalue)
//const cell= worksheet.getCell(output.row,output.col)
const cell= worksheet.getRow(output.row).getCell(output.col)

cell.value= replacetext
await workbook.xlsx.writeFile(filepath)


}
async function readExcelFile(worksheet,searchvalue)
{
    let output={row:-1,col:-1}
    worksheet.eachRow((row,rowNumber)=>
        {
           row.eachCell((cell,colNumber)=>{

           
        //console.log(cell.value)
        if(cell.value===searchvalue)
        {
            console.log(`row ${rowNumber} cell ${colNumber} = ${cell.value}`);
output.row=rowNumber
output.col=colNumber


        }
    })
})
return output
}

writeExcelFile("admin","Username","C://Users//aadit//OneDrive//Desktop//ExcelRead.xlsx")