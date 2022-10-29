//imported from html
// calculates the payroll
var rowTable = 1;
var numTable = 0;

function remove() { 
    var resp = document.getElementById("specify").value;

    document.getElementById("test").innerHTML=resp;    
    document.getElementById("table").deleteRow(resp);
    document.getElementById("numbering").deleteRow(numTable);

    --numTable;
    --rowTable;
}

function payroll(){
    var table = document.getElementById("table");
    var row = table.insertRow(rowTable);

    var employeeName = row.insertCell(0);
    var daysWorked = row.insertCell(1);
    var dailyRate = row.insertCell(2);
    var grossCell = row.insertCell(3);
    var deductAmount = row.insertCell(4);
    var netpayCell = row.insertCell(5);

    var numberingTable = document.getElementById("numbering");
    var rowNum = numberingTable.insertRow(rowTable);
    var cell1 = rowNum.insertCell(0);
    
    dwIn = parseFloat(document.getElementById("dwIn").value);
    drIn = parseFloat(document.getElementById("drIn").value);
    daIn = parseFloat(document.getElementById("daIn").value);
    gross = (dwIn * drIn);
    
    cell1.innerHTML = ++numTable;
    employeeName.innerHTML = document.getElementById("nameIn").value;
    daysWorked.innerHTML = parseFloat(document.getElementById("dwIn").value);
    dailyRate.innerHTML = parseFloat(document.getElementById("drIn").value);
    grossCell.innerHTML = gross;
    deductAmount.innerHTML = parseFloat(document.getElementById("daIn").value);
    netpayCell.innerHTML = parseFloat(gross - daIn);

    ++rowTable
}

/*      No. = is the Payroll List Line number

        Gross Pay = Days Worked * Daily Rate

        Net Pay = Gross Pay - Deduction Amount
*/