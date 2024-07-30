// Task 81
// Berilgan stringdagi yagona(takrorlanmaydigan) so'zlarni toping.

function uniqueWords(s) {
    let arr = s.split(" ")
    let result = arr.filter(item => arr.lastIndexOf(item) === arr.indexOf(item))
    return result
}
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]

// TAsk 82
// Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.

function collectValues(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })

            }
            else if (typeof value[key] === "number") {
                result.push(value[key])
            }
        }
    }
    return result
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
// console.log(collectValues(obj)); // Output: [1, 2, 3, 4]

// Task 83
// Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.

function swapFirstLast(s) {
    let arr = s.split(" ")
    let first_item = null
    let last_item = null
    let result = []
    arr.forEach((item) => {
        first_item = item[0]
        last_item = item[item.length - 1]
        result.push(last_item + item.slice(1, -1) + first_item);
    });

    return result
}
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo" 

// TAsk 84
// Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.

function indexOfMax(arr) {
    let max_num = 0
    let max_index = 0
    arr.forEach((item, index) => {
        if (item > max_num) {
            max_num = item
            max_index = index
        }
    });
    return max_index
}
// console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2

// TAsk 85
// Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.

function sqrtElements(arr) {
    return arr.map(Math.sqrt)
}
// console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]

// TAsk 86
// Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.

function separateEvenOdd(arr) {
    let odds = arr.filter((item) => item % 2 !== 0)
    let evens = arr.filter((item) => item % 2 === 0)

    return { evens, odds }
}
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }


// TAsk 87
// Berilgan raqamlar ro'yxatidagi tub sonlarni toping.

function findCoprimePairs(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 2) {
            return false
        }
        let count = 0
        for (let g = 1; g < arr[i]; g++) {
            if (arr[i] % g === 0) {
                count++

            };

        }
        if (count === 1) {
            result.push(arr[i])

        }
    }
    return result
}
// console.log(findCoprimePairs([3, 2, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]\\

// Task 88
// Berilgan raqamlar ro'yxatidagi barcha elementlarni k qadam bosib aylanma tartibda o'ngga suring.

function rotateArray(arr, k) {
    for (let i = 0; i <= k; i++) {
        arr.push(arr.shift())
    }
    return arr
}

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]


// TAsk 89
// Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, 
// faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.

function trimmedMean(arr) {
    arr.sort((a, b) => a - b)
    arr.pop()
    arr.shift()
    let sum = 0
    let count = 0
    for (const item of arr) {
        sum += item
        count++
    }
    return sum / count
}
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5


// TAsk 90
// Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.

function findPalindromes(arr) {
    let palindrome = 0
    let result = []
    for (const item of arr) {
        palindrome = +item.toString().split("").reverse().join("")
        if (+item.toString().split(" ") == palindrome) {
            result.push(item)
        }
    }
    return result
}

// console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]


// TAsk 91
// Berilgan raqamlar ro'yxatidagi hamma elementlar bir xil qiymatga ega ekanligini tekshiring.

function allElementsEqual(arr) {
    let result = arr.every(item => item == arr[0])
    return result
}

// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false

// TAsk 92
// Berilgan ikkita ro'yxatning bir xil elementlarni o'z ichiga olishini tekshiring, tartibini hisobga olmasdan.

function arraysHaveSameElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true
        }
        else {
            return false
        }

    }
}
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false

// Task 93
// Berilgan raqamlar ro'yxatidagi elementlarning to'plam(duplikat bo'lmasligi) bo'lishini tekshiring.

function isUniqueSet(arr) {
    let result = 0
    for (const item of arr) {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            result = true
        }
        else {
            result = false
        }
    }
    return result
}
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false


// Task 94
// Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.

// Task 94
// Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.

function hasThreeConsecutiveEvenOrOdd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 === 0) {
            count++
        }
        else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            count++
        }

    }

    if (count > 1) {
        return true
    }
    else {
        return false
    }

}


// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true




// TAsk 95
// Berilgan raqamlar ro'yxatidagi elementlar ketma-ket o'sib yoki kamayib borayotganini tekshiring.

function isMonotonic(arr) {
    let result = false
    let sorted_arr = [...arr].sort((a, b) => a - b).join("")
    let reverse_sorted = [...arr].sort((a, b) => b - a).join("")
    let new_arr = [...arr].join("")
    if (new_arr === sorted_arr || new_arr === reverse_sorted) {
        result = true
    }

    return result
}
console.log(isMonotonic([1, 2, 2, 3])); // Output: true
console.log(isMonotonic([6, 5, 4, 4])); // Output: true
console.log(isMonotonic([1, 3, 2])); // Output: false
