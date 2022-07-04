// Your code here
function createEmployeeRecord(empArray){
    let employeeRecord = {firstName : empArray[0],
        familyName : empArray[1],
        title : empArray[2], 
        payPerHour : empArray[3],
        timeInEvents : [], 
        timeOutEvents: []
    }
    //console.log (createEmployeeRecord(empArray))
    return employeeRecord  
    }
    
let emploeeRecord1 = {firstName : "Oleh",
    familyName : "Kruk",
    title : 'director', 
    payPerHour : 25,
    timeInEvents : [], 
    timeOutEvents: []
}

let empArray = ['nazar', 'kruk', 'it', 35]
let empArray1 = ['a', 'b', 'it', 33]
let empArray2 = ['s', 'd', 'it', 34]
let empArray3 = ['f','kuk', 'it', 85]

let employerArrays = [empArray, empArray1, empArray3]

function createEmployeeRecords(employeeArrays){
    let employeeRecords = []
    
    for (empArray of employeeArrays){
        employeeRecords.push(createEmployeeRecord(empArray))
        console.log(createEmployeeRecord(empArray))
    }
    return employeeRecords
}

function  createTimeInEvent(employeeRecord, punchIn){
    
    const updatedTimeIn = {
        type : "TimeIn",
        hour: parseInt(punchIn.substr(11, punchIn.length-1)),
        date: punchIn.substr(0, 10)

    } 
    employeeRecord.timeInEvents.push(updatedTimeIn)
    return employeeRecord
}

function  createTimeOutEvent(employeeRecord, punchOut){
    
    const updatedTimeOut = {
        type : "TimeOut",
        hour: parseInt(punchOut.substr(11, punchOut.length-1)),
        date: punchOut.substr(0, 10)

    } 
    employeeRecord.timeOutEvents.push(updatedTimeOut)
    return employeeRecord
}
createTimeOutEvent(emploeeRecord1, "12-12-2021 900")
createTimeInEvent(emploeeRecord1, "12-12-2021 100")
createTimeOutEvent(emploeeRecord1, "13-12-2021 800")
createTimeInEvent(emploeeRecord1, "113-12-2021 200")


function hoursWorkedOnDate(emploeeRecord, workDate){
    for (let i = 0; i < emploeeRecord.timeOutEvents.length; i++){
        if (emploeeRecord.timeInEvents[i].date === workDate){
            return ((emploeeRecord.timeOutEvents[i].hour - emploeeRecord.timeInEvents[i].hour)/100) 
        }

    }
}
       


function wagesEarnedOnDate(emploeeRecord, workDate){
    
    for (let i = 0; i < emploeeRecord.timeOutEvents.length; i++){
        if (emploeeRecord.timeInEvents[i].date === workDate){
            return ((emploeeRecord.timeOutEvents[i].hour - emploeeRecord.timeInEvents[i].hour)/100) * emploeeRecord.payPerHour
        }

    }
       
}

function allWagesFor(emploeeRecord){
    let sum = 0
    for (let j = 0; j <= emploeeRecord.timeInEvents.length - 1 ; j++){
        let workDate = emploeeRecord.timeInEvents[j].date
        
        let wageOneDay = wagesEarnedOnDate(emploeeRecord, workDate)
        sum += wageOneDay   
    } return sum

    

}


function calculatePayroll(arrayOfEmpRec){
    let sum1  = 0
    for (const emploeeRecord of arrayOfEmpRec){
        let AllWages = allWagesFor(emploeeRecord)
        
        sum1 += AllWages
        
    }return sum1
    
}
    

