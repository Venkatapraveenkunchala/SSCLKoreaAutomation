const xlsxs=require('xlsx')

  class ExcelValues{ 
    async readingExcel(){
let workbook=xlsxs.readFile('features//stepDefinations//ExcelSheets//ValidWarrantyTestData.xlsx')
//let sheetName=workbook.SheetNames[0]

let sheet=workbook.Sheets[workbook.SheetNames[0]]
let Sno=sheet['A2'].v;
console.log(Sno)
let SYear=sheet['B2'].v;
console.log(SYear)

let SMonth=sheet['C2'].v;
console.log(SMonth)

let VMName=sheet['D2'].v;
console.log(VMName)

let VMCode=sheet['E2'].v;
console.log(VMCode)

let PNumber=sheet['F2'].v;
console.log(PNumber)

let FRDate=sheet['G2'].v;
console.log(FRDate)

let CPrice=sheet['H2'].v;
console.log(CPrice)

let VIN=sheet['I2'].v;
console.log(VIN)

let Millege=sheet['J2'].v;
console.log(Millege)

let VClassification=sheet['K2'].v;
console.log(VClassification)

let OutLetCode=sheet['L2'].v;
console.log(OutLetCode)

let PCode=sheet['M2'].v;
console.log(PCode)
let PPrice=sheet['N2'].v;
console.log(PPrice)

let ApplicationDate=sheet['O2'].v;
console.log(ApplicationDate)

let WarrantyStartDate=sheet['P2'].v;
console.log(WarrantyStartDate)

let ExistingWarrantyEnddate=sheet['Q2'].v;
console.log(ExistingWarrantyEnddate)

const Excelvalue={
  SettlementYears: SYear,
  SettlementMonths: SMonth,
  VehicleModelName:VMName,
  VehicleModelCode:VMCode,
  PlateNumber:PNumber,
  FirstRegistrationDate:FRDate,
  CarPrice:CPrice,
  VINNumber:VIN,
  CarMillege:Millege,
  VehicleClassification:VClassification,
  OutLetCodes:OutLetCode,
  ProductCode:PCode,
  ProductPrice:PPrice,
  ApplicationDates:ApplicationDate,
  WarrantyStartDates:WarrantyStartDate,
  ExWRDates:ExistingWarrantyEnddate,
    }
    return Excelvalue
    }
  }
  module.exports={ExcelValues}