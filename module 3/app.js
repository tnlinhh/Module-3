import { firstName, age, address } from './person.js';
import message, {lastName, isMarried} from './util.js';

// Ưu điểm:  Dễ đọc, tách riêng mã JS và HTML
// Nhược điểm: Nó sẽ tạo ra các network, tốn nhiều tài nguyên hơn
// alert("Hello JS from app.js");

// const demo = document.getElementById("demo");
// console.log(demo); // null
// demo.innerHTML = 'Hello World!';

// function sum(a, b) {
//     return a + b;
// }
//
// console.log(sum(5, 10));

// 1. Arrow Function (Hàm mũi tên)
const sum = (a, b) => a + b;

console.log(sum(5, 10));

// 2. Module (import/export)

console.log(firstName);
console.log(age);
console.log(message);
console.log(lastName);
console.log(isMarried);

// 3. Các hàm làm việc với mảng (map, filter, reduce, forEach)
const arr = [1, 2, 3];
console.log(arr);
// map
const newArr = arr.map((value) => value * 2);
console.log(newArr);
// filter
const newArr2AfterFilter = arr.filter((value) => value > 3);
console.log(newArr2AfterFilter);
// reduce
let initialValue = 0;
const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial); // 6
// forEach
arr.forEach((value) => console.log(value));
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Spread operator
const arr2 = [4, 5, 6];
console.log('Danh sách giá trị của mảng arr1: ', arr);
console.log('Danh sách giá trị của mảng arr2: ', arr2);
const combinedArray = [...arr, ...arr2];
console.log(combinedArray);
// Destructuring - Tách mảng
const fruits = ['Apple', 'Meomeo', 'Banana'];
fruits.push('Orange');
console.log(fruits);
// const first = fruits[0];
// const second = fruits[1];
const [first, second, ...newFruits] = fruits;
console.log(first);
console.log(second);
console.log(newFruits);
// Destructuring - Tách đối tượng (object)
const obj = {
    name2: 'WanBi',
    age2: 29
}
// const name2 = obj.name;
// const age2 = obj.age;
// console.log(name2);
// console.log(age2);
const { name2, age2 } = obj;
console.log(name2);
console.log(age2);

// Class ()

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet = () => {
        return 'Tên tôi là ' + this.name + ', tôi ' + this.age + ' tuổi!';
    }
}

const tuan = new Person('Tuấn', 26);
console.log(tuan);
console.log(tuan.greet());

// Template Literal (`: backtick)
// ${}
const msg = `Tên tôi là
${tuan.name}, năm nay tôi
${tuan.age} tuổi!`;
console.log(msg);

// Ternary Operator (Toán tử 3 ngôi)
console.log(age > 18 ? address === 'HN' ? console.log('Tôi sống ở Hà Nội') : 'Tôi không sống ở Hà Nội' : '2'); //
// if (age > 18) {
//     console.log('Tôi trên 18 tuổi');
//     if (address === 'HN') {
//         console.log('Tôi sống ở Hà Nội');
//     } else {
//         console.log('Tôi không sống ở Hà Nội');
//     }
// } else {
//     console.log('Tôi chưa đủ 18 tuổi');
// }
if (age > 18) {
    console.log('Tôi trên 18 tuổi!');
}
console.log(age > 18 && 'Tôi trên 18 tuổi!');
