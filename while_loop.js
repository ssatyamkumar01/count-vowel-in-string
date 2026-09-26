//While loop.

// let i=1;
// while(i<=10){
//     console.log('Dosti');
//     i++;
// }

// Do_while loop

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=10);

// for-of loop.
// let str='Java and Python';
// for (let i of str) {
//     console.log(i);
// }

// For_in loop

let student={
    name:'Falana',
    course:'B.Tech',
    cgpa:9.55,
    job:'45_LPA',
    company:'Microsoft'
};
for(let i in student){
    console.log("Key=",i, "value=", student[i]);
    
}