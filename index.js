const firstNum = document.getElementById('first-num');
const secondNum = document.getElementById('second-num');
const addition = document.querySelector(".first");
const substraction = document.querySelector(".second");
const multiply = document.querySelector(".third");
const divide = document.querySelector(".fourth");
const result_window=document.getElementById('span');

//type_convert is an user_defined function

addition.addEventListener('click',function(){
    let x=type_convert(firstNum.value);
    let y=type_convert(secondNum.value);
    let ans=x+y;
    console.log(ans);
    result_window.innerHTML=ans;

})


substraction.addEventListener('click',function(){
    let x=type_convert(firstNum.value);
    let y=type_convert(secondNum.value);
    let ans=x-y;
    console.log(ans);
    result_window.innerHTML=ans;

})


mulitply.addEventListener('click',function(){
    let x=type_convert(firstNum.value);
    let y=type_convert(secondNum.value);
    let ans=x*y;
    console.log(ans);
    result_window.innerHTML=ans;

})


divide.addEventListener('click',function(){
    let x=type_convert(firstNum.value);
    let y=type_convert(secondNum.value);
    let ans=x/y;
    console.log(ans);
    result_window.innerHTML=ans;

})





function type_convert(num){
    return parseFloat(num);
}




// let = function plus(value) {
//     return num1 + num2
// }
// let = function minus(value){
//     return num1 - num2
// }
// let = function mul(value){
//     return num1 * num2
// }
// let = function div(value){
//     return num1 / num2
// }
