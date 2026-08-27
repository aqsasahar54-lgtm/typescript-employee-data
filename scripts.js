"use strict";
const employees = [
    {
        EmployeeId: "6578",
        EmployeeName: "Aqsa",
        EmployeeAge: 20,
        address: {
            city: "Karachi",
            country: "Pakistan",
            zipcode: 75000
        }
    },
    {
        EmployeeId: "6579",
        EmployeeName: "Ali",
        EmployeeAge: 25,
        address: {
            city: "Lahore",
            country: "Pakistan",
            zipcode: 54000
        }
    },
    {
        EmployeeId: "6580",
        EmployeeName: "Sara",
        EmployeeAge: 23,
        address: {
            city: "Islamabad",
            country: "Pakistan",
            zipcode: 44000
        }
    },
    {
        EmployeeId: "6581",
        EmployeeName: "Ahmed",
        EmployeeAge: 30,
        address: {
            city: "Rawalpindi",
            country: "Pakistan",
            zipcode: 46000
        }
    },
    {
        EmployeeId: "6582",
        EmployeeName: "Hina",
        EmployeeAge: 27,
        address: {
            city: "Multan",
            country: "Pakistan",
            zipcode: 60000
        }
    }
];
console.log(employees);
console.log(employees[1].address.city);
