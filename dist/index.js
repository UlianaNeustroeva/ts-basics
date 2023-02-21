"use strict";
let sales = 123456789;
let coutse = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => n.toExponential);
let user = [20, 'Ulya'];
user.push(1);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Ulya',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10 kg');
//# sourceMappingURL=index.js.map