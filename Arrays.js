// Array is the collection of items.
// Array is mutable in js.

// let stu_marks=[95,96,98,97,99,97];
// let stu_name=['Ram','shyam','hanuman'];
// console.log(stu_marks.length);
// console.log(stu_name.length);
// console.log(stu_marks[1]);
// console.log(stu_name[1]);
// console.log(stu_marks);
// console.log(stu_name);
// stu_marks[0]=94;
// console.log(stu_marks);

// let stu_marks = [95, 96, 98, 97, 99, 97];
// for (let i = 0; i < stu_marks.length; i++) {
//   console.log(stu_marks[i]);
// }

// for of
// Suppose we want to the student name in upper case.
// let stu_name = ["Ram", "shyam", "hanuman", "bharat"];
// for (let name of stu_name) {
//   //console.log(name);
//   console.log(name.toUpperCase()); // It will print in uppercase.
// }

// Array Methods.
// Push(): add to end
// Pop(): delete from end and return.
// toString(): converts array to string.
// let fruits = ["apple", "mango", "litchi", "pomegranate", "grapes"];
// console.log(fruits);

// fruits.push("guava"); // guava add in the last of an array.
// console.log(fruits);

// let removedItem=fruits.pop();
// console.log(fruits); // remove guava from array.
// console.log('The pop item is=',removedItem);

// let fruits = ["apple", "mango", "litchi", "pomegranate", "grapes"];
// console.log(fruits.toString());
// console.log(typeof(fruits));

// concatt: joins multiple array and returns result.
// unshift(): add to start.
// shift(): delete from start and return.

// let marvels_heros=['ironman','thor','captain','hulk'];
// let dc_heros=['superman','batman','wonderwoman','aquaman'];
// let indian_heros=['krish','shaktiman',]
// console.log(marvels_heros.concat(dc_heros,indian_heros));
// marvels_heros.unshift('spiderman');
// console.log(marvels_heros);
// let del_value=marvels_heros.shift();
// console.log(del_value);

// slice: return a piece of the array.
// splice: change original array.

// let marvels_heros=['ironman','thor','captain','hulk','spiderman','dr.strange','loki'];
// console.log(marvels_heros.slice(0,2));

let num=[1,2,3,4,5,6,7,8,9];
num.splice(0,2,99,98)
console.log(num);


