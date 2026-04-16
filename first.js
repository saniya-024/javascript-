// let age = 24;
// let x = BigInt("123") 
// const student = {
//     fullName:"Aman",
//     age:20,
//     cgpa:8,
//     isPass:true,
// };
// console.log(student["age"]);
// console.log(student.cgpa);

function addsum() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;

    let sum = Number(a) + Number(b);

    console.log("Total number", sum);

    document.getElementById("result").innerText = sum;
}