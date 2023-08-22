// 1
function returnBigNum(a: number, b: number): number {
    return a > b ? a : b
}

console.log(returnBigNum(8, 6));

// 2
function printBigNum(a: number, b: number) {
    console.log(a > b ? a : b)
}

printBigNum(8, 15)

// 3
function evenOrOdd(num: number): string {
    return num % 2 === 0 ? 'even' : 'odd'
}

console.log(evenOrOdd(8))

// 4
function lengthString(str: string): number {
    return str.length
}

console.log(lengthString('rose'));

// 5
function returnListNumbers(n: number): number[] {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }
    return array
}

console.log(returnListNumbers(6))

// 6
function findBigNum(array: number[]): number {
    let bigNum: number = 0
    for (let i = 0; i < array.length; i++) {
        array[i] > bigNum ? bigNum = array[i] : bigNum = bigNum
    }
    return bigNum
}

console.log(findBigNum([0, 1, 2, 3, 4, 5]))

// 7
type person = {
    name: string;
    age: number;
    isStudent: boolean
}

// 8
function printPerson(person: person): void {
    console.log(`name: ${person.name} age: ${person.age} isStudent: ${person.isStudent}`)
}

const david: person = {
    name: "yaacov",
    age: 13,
    isStudent: true
}

printPerson(david)

// 9
function isMinor(person: person): boolean {
    return person.age > 18
}

console.log(isMinor(david))

// 10
interface book {
    Title: string
    Author: string
    Year: number
}

// 11
type Reader = person & {
    favoriteBook: book
}

const man: Reader = {
    name: "yaacov",
    age: 13,
    isStudent: true,
    favoriteBook: {
        Title: 'story',
        Author: 'eric',
        Year: 2019
    }
}

// 12
function oldMen(mans: Reader[]): string {
    let bigAge: number = mans[0].age
    const oldMan: object = mans.filter((old) => old.age > bigAge)
    return oldMan[0].name
}


// 13
function oldBook(mans: Reader[]): book {
    let year: number = mans[0].favoriteBook.Year
    const old: object = mans.filter((book) => book.favoriteBook.Year < year)
    return old[0].favoriteBook
}


const people: Reader[] = [
    {
        name: "Abigail",
        age: 25,
        isStudent: false,
        favoriteBook: {
            Title: 'The Hidden City',
            Author: 'Eitan Fox',
            Year: 2017
        }
    },
    {
        name: "Israel",
        age: 40,
        isStudent: false,
        favoriteBook: {
            Title: 'Demons on Earth',
            Author: 'Moshe Deri',
            Year: 2005
        }
    },
    {
        name: "Rachel",
        age: 19,
        isStudent: true,
        favoriteBook: {
            Title: 'Love in the Time of Corona',
            Author: 'Lea Goldberg',
            Year: 2020
        }
    }
];


console.log(oldMen(people))
console.log(oldBook(people))


// exercises- page 2
// 1
function evens(array: number[]): number[] {
    const evensArray: number[] = array.filter((num) => num % 2 === 0)
    return evensArray
}

console.log(evens([0, 1, 2, 3, 4, 5]))

// 2
function rectangleArea(rectangle: rectangle): number | string {
    const area: number = rectangle.height * rectangle.width
    return `the area of rectangle is: ${area}`
}

interface rectangle {
    height: number
    width: number
}

const rectangle1: rectangle = {
    height: 10,
    width: 5
}
console.log(rectangleArea(rectangle1))


// 3
function isPali(sentence: string): boolean {
    const reverse: string = sentence.split('').reverse().join('')
    return reverse === sentence
}

console.log(isPali('abaa'))

// 4
function capitalLetter(array: string[]): string[] {
    const fixArray: string[] = array.map((item) => item[0].toUpperCase() + item.slice(1, item.length).toLowerCase())
    return fixArray
}
console.log(capitalLetter([
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry"
]));

// 5
function removeDouble(array: number[]): number[] {
    let filterDouble: number[] = [... new Set(array)]
    return filterDouble
}


console.log(removeDouble([1, 2, 6, 2, 8, 2, 7, 3, 3]))


// 6
function acronyms(name: fullName): object {
    return { firstInitial: name.first.slice(0, 1), lastInitial: name.last.slice(0, 1) }
}

interface fullName {
    first: string
    last: string
}

const fullName: fullName = {
    first: 'yaacov',
    last: 'rose'
}
console.log(acronyms(fullName));

// 7
function averageAge(array:object[]):number {
    let age:number = 0
    array.forEach((item) => age += item.age)
    return age / array.length
}


const mans = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
]

console.log(averageAge(mans))


// 8
function minAndMax(array:number[]):minMax {
    const minMax:minMax = {min: 0, max: 0}
    minMax.min = Math.min(... array)
    minMax.max = Math.max(... array)
    return minMax
}

interface minMax {
    min: number
    max: number
}

const array = [ 1, 2, 6, 8, 7, 3 ]
console.log(minAndMax(array))

// 9
function reverse(array:number[]):number[] {
    return array.reverse()
}

console.log(reverse([ 1, 2, 6, 8, 7, 3 ]))