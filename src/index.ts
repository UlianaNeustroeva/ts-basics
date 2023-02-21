// Types
let sales = 123_456_789;
let coutse = 'TypeScript';
let is_published = true;
let level;

function render(document: any) {
    console.log(document);

}

// Arrays
let numbers = [1, 2, 3];
numbers.forEach(n => n.toExponential);

//T uples
let user: [number, string] = [20, 'Ulya'];
user.push(1);

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize);

// Function 
function calculateTax(income: number, taxYear = 2023): number {
     if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);

// Object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee  = { 
    id: 1, 
    name: 'Ulya',
    retire: (date: Date) => {
        console.log(date);
    }
 };

