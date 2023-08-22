// 1
function returnBigNum(a, b) {
    return a > b ? a : b;
}
console.log(returnBigNum(8, 6));
// 2
function printBigNum(a, b) {
    console.log(a > b ? a : b);
}
printBigNum(8, 15);
// 3
function evenOrOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}
console.log(evenOrOdd(8));
// 4
function lengthString(str) {
    return str.length;
}
console.log(lengthString('rose'));
