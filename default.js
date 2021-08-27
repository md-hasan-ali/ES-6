function addNumber(num1,num2=20) {
    // num2 = num2 || 0;
    // if(num2 == undefined) {
    //     num2 = 50;
    // }
    const result = num1 + num2;
    return result ;
}
const sendNumber = addNumber(10);
console.log(sendNumber);