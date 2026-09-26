// Write a code which can give grade to student according to their Score.
let num=Number(prompt('Enter your number:-'));
if(num>=80 && num<=100){
    console.log('Grade A');
}
else if(num>=70 && num<=89){
    console.log('Grade B');
}
else if(num>=60 && num<=69){
    console.log('Grade C');
}
else if(num>=50 && num<=59){
    console.log('Grade D');
}
else{
    console.log('Fail !');
    
}
