let age = 25;
console.log( age);
console.log(typeof age);

let num1 = 0.1;
let num2 = 0.2;
let num3 = num1+num2;
console.log(num3);

let name = "Raghava";
console.log("Hello" +" "+ name);
console.log(typeof name);

let age1 = 30;
console.log(typeof age1);
let result = age>18;
console.log(typeof result);
console.log(result);
if(age>18){
    console.log("you are adult");
}
else{
    console.log("you are minor");
    }



    let a = null;
    console.log(a);
    console.log(typeof a);

    let b = undefined;
    console.log(b);
    console.log(typeof b);


    let value1 = 10;
    let value2 = 10;
    console.log(value1==value2);

    let value3 = Symbol(10);
    value3 = Symbol(20);
    console.log(value3);
    let value4 = Symbol(10);
    console.log(value3==value4);


    let fruits = ["Apple","Banana","Mango","Orange"];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits[2]);
    console.log(typeof fruits);


    let student = {
        name:"Jeevan",
        age:25,
        fee:30000
    }

    console.log(student);
    console.log(student.fee);


    let array = [
        {
            name:"jeeven",
            age:25,
            fee:30000
        },
        {
            name:"Harsha",
            age:23,
            fee:25000
        },
        {
            name:"Venkat",
            age:27,
            fee:230000
        }
    ]

    console.log(array[1].name);