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
function printPerson(person: person) {
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

const man:Reader = {
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
function oldMen (mans:Reader[]):string {
    let bigAge:number = mans[0].age
    const oldMan:object = mans.filter((old) => old.age > bigAge)
    return oldMan[0].name
}


// 13
function oldBook (mans:Reader[]):object {
    let year:number = mans[0].favoriteBook.Year
    const old:object = mans.filter((book) => book.favoriteBook.Year < year)
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