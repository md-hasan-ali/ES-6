const add = (num1, num2) => num1 + num2;
console.log(add(10, 10));

const add2 = (num1,num2,num3) => num1 + num2 + num3;
console.log(add2(2,2,2));

const add3 = (num) => num * 5;
console.log(add3(5));

const name = () => 'hasan ali';
console.log(name())

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    const output = result * 12;
    return output;
}

const total = doMath(10,5);
console.log(total);

