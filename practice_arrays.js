// Q1. Find the average marks of the student.
// let sum = 0;
// let marks = [85, 97, 44, 37, 76, 60];
// for (let val of marks) {
//   sum = sum + val;
//   // console.log(val);
// }
// console.log('Sum of an array is:=',sum);
// console.log('Average of an array is=',sum/marks.length);

// Q2. For A given array with price of five item. All item have an offer of 10% off on them. Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let offer of items) {
//   let discount = offer / 10;
//   items[i] = items[i] - discount;
//   console.log(items[i]);

//   i++;
// }

// Create an array to store companies.
// Remove the first company from the array
//  Remove the Uber and Ola in the place.
//  Add Amazon at the end.

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);


// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let remove_companies = companies.splice(2, 1, "Ola");
// console.log(remove_companies);
// console.log(companies);



let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.push('Amazon');
console.log(companies);
