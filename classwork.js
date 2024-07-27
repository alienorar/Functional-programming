// // let usersData = [{
// //     yosh: 50,
// //     ism: "Eshmat",
// //     isLife: true,
// //     qaysiDavlatdaBolgan: ["O'zbekiston", "Rossiya", "Kanada"]
// // },
// // {
// //     yosh: 20,
// //     ism: "Toshmat",
// //     isLife: true,
// //     qaysiDavlatdaBolgan: ["O'zbekiston", "Ispaniya", "Turkiya"]
// // },
// // {
// //     yosh: 100,
// //     ism: "John",
// //     isLife: false,
// //     qaysiDavlatdaBolgan: ["Germaniya", "Hindiston", "Turkiya"]
// // },
// // {
// //     yosh: 40,
// //     ism: "John",
// //     isLife: true,
// //     qaysiDavlatdaBolgan: ["Argentina", "Brazilya"]
// // },
// // {
// //     yosh: 77,
// //     ism: "Bryus Li",
// //     isLife: true,
// //     qaysiDavlatdaBolgan: ["Xotoy", "Yaponiya"]
// // },
// // {
// //     yosh: 77,
// //     ism: "Jeki chang",
// //     isLife: true,
// //     qaysiDavlatdaBolgan: ["Xotoy", "Yaponiya"]
// // },
// // ]

// // const unversalFunction = (ism, davlat1) => {

// // }

// // console.log(usersData.find((value,index,obj)=>{
// //     return value.yosh == 50
// // }));

// // console.log(usersData.filter((value, index, obj) => {
// //     return value.yosh == 50
// // }));

// let arr = [
//     {
//         "id": "5aec96de-9727-447d-8c61-6f3d2bca5772",
//         "name": {
//             "qr": "11-kurs",
//             "uz": "11-kurs"
//         },
//         "totalDuration": 0,
//         "lessonCount": 0,
//         "description": {
//             "qr": "bu kursda sz uyda otirib pul topasz",
//             "uz": " bu kursda sz uyda otirib pul topasz"
//         },
//         "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
//         "type": "occupation",
//         "degree": "beginner",
//         "teacher": "Ahmadboy",
//         "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
//         "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
//         "count": 2,
//         "queue": 2,
//         "updatedat": "2024-07-25T11:49:44.232Z"
//     },
//     {
//         "id": "9d18a6cc-bf28-4da7-a1d1-d409a1915dc3",
//         "name": {
//             "qr": "grafik design qr",
//             "uz": "grafik design"
//         },
//         "totalDuration": 0,
//         "lessonCount": 0,
//         "description": {
//             "qr": "bu kursda sz uyda otirib pul topasz",
//             "uz": " bu kursda sz uyda otirib pul topasz"
//         },
//         "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
//         "type": "occupation",
//         "degree": "beginner",
//         "teacher": "Ahmadboy",
//         "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
//         "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
//         "count": 2,
//         "queue": 4,
//         "updatedat": "2024-07-25T11:49:44.232Z"
//     },
//     {
//         "id": "54c82f13-f8a5-4d83-a200-93578776c39e",
//         "name": {
//             "qr": "kursni chinisi",
//             "uz": "kursni chinisi"
//         },
//         "totalDuration": 0,
//         "lessonCount": 0,
//         "description": {
//             "qr": "kursni chinisi desc",
//             "uz": "kursni chinisi desc"
//         },
//         "descriptionvideo": "https://www.youtube.com/watch?v=yDD7FL8EhFs",
//         "type": "occupation",
//         "degree": "medium",
//         "teacher": "Eshmat",
//         "teacherphoto": "d1e5f3f3-ed97-4ad2-9e7b-0ded461b0e74.jpg",
//         "cover": "6bbd9f3b-9e0c-4122-bfa9-230b96806a16.jpg",
//         "count": 60,
//         "queue": 8,
//         "updatedat": "2024-07-25T11:49:44.232Z"
//     },
//     {
//         "id": "bdaf6bc4-9281-4bf3-8483-6ba4d522078c",
//         "name": {
//             "qr": "react js",
//             "uz": "react js "
//         },
//         "totalDuration": 3661,
//         "lessonCount": 1,
//         "description": {
//             "qr": "bu kursda sz uyda otirib pul topasz",
//             "uz": " bu kursda sz uyda otirib pul topasz"
//         },
//         "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
//         "type": "occupation",
//         "degree": "beginner",
//         "teacher": "Ahmadboy",
//         "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
//         "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
//         "count": 2,
//         "queue": 9,
//         "updatedat": "2024-07-25T11:49:44.232Z"
//     }
// ]


// arr.map(item => {
//     {
//         id: item.id;
//             cousename: item.name.uz
//     }
// });
// console.log(arr);

// Task 70
// Berilgan objectdagi barcha string qiymatlarni toping va birlashtiring.

function concatStrings(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "string") {
                result.push(value[key])
            }
        }
    }
    return result.join("")
}


// const obj = {
//     a: "Hello",
//     b: {
//         c: " ",
//         d: {
//             e: "World",
//             f: {
//                 g: "!"
//             }
//         }
//     }
// };
// console.log(concatStrings(obj)); // Output: "Hello World!"

// Task 71
// Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.

function sortByLength(s) {
    let arr = s.split(" ")
    return arr.sort((a, b) => a.length - b.length)
}

// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"

// TAsk 72
// Berilgan objectdagi barcha raqamli qiymatlarni toping va ro'yxat (array) sifatida qaytaring.

function findNumbers(obj1) {
    let arr = [{ value: obj1, step: 1 }]
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
};

// const obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj1)); // Output: [1, 2, 3, 4]

// Task 73
// Berilgan stringdagi eng uzun so'zni toping.

function longestWord(s) {
    let arr = s.split(" ")
    let max_word = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max_word.length) {
            max_word = arr[i]
        }
    }
    return max_word
}


// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"


// Task 74 
// Berilgan stringdagi barcha kichik harflarni katta harflarga aylantiring 
// va teskari tartibda qaytaring.

function reverseUpperCase(s) {
    let arr = s.split("").reverse().join(" ").toUpperCase()
    return arr
}
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"

// Task 75
// Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.

function extractNumbers(str) {
    let arr = str.split(" ")

}

// Test case
console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
console.log(extractNumbers("123 Main St.")); // Output: [123]

// TAsk 76

function valueTypes(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object" && !Array.isArray(value[key]) && value[key] !== null) {
                arr.push({ value: value[key], step: step + 1 })
            }
            else {
                result.push(typeof value[key])
            }
        }
    }
    return result
}
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 3.14,
//         f: null,
//         g: {
//             h: undefined,
//             i: [1, 2, 3]
//         }
//     }
// };
// console.log(valueTypes(obj));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]


// Task 77
// Berilgan objectdagi barcha kalitlarni ularning qiymatlari bilan almashtiring.
// Agar qiymatlari takrorlansa, oxirgi qiymatni qabul qiling.

function invertObject(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = {}
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else {
                result[value[key]] = key
            }
        }
    }
    return result
}
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
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }


// Task 78
// Berilgan string palindrom ekanligini tekshiring.
//  (Palindrom - o'qilganda orqa tomondan ham bir xil bo'lgan so'z yoki ibora).

function isPalindrome(str) {
    let result = ''
    let palindrom = str.split("").reverse().filter(item => item !== ",").toLowerCase()
    if ((str.split("").filter(item => item !== ",").join("").toLowerCase()) === palindrom) {
        result = `${str} is palindrom`
    }
    else {
        result = `${str} is not palindrom`
    }
    return result
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false



// Task 80
// Berilgan stringni so'zlarga ajratib, har bir so'zning bosh harfini katta qiling va qayta birlashtiring
function capitalizeWords(s) {
    let arr = s.split(" ")
    let new_arr = arr.map(item => {
        return item[0].toUpperCase() + item.slice(1)
    });
    return new_arr
}
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"


// Task 79
// Berilgan objectdagi barcha raqamli qiymatlarning yig'indisini hisoblang.
function sumNumbers(obj) {
    // Code here
}

// Test case
const obj2 = {
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
console.log(sumNumbers(obj2)); // Output: 10