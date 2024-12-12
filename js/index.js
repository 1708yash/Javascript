// document.write("this one is from the indexjs page<br>");
// var x=10;
// var y= "yash";
// document.write(" <br>");
// document.write(x);
// document.write(" <br>");
// document.write(y);
// document.write(" <br>");
// let m ="this is m variable";  // can not be redeclared with same name of the variable
// document.write(m);
// document.write(" <br>");
// const n = "this is const "; //can not redeclare and value can not be changed
// document.write(n);
// // vid 8 data type
// // 1. string
// let str = "this is string";
// document.write(str);
// document.write(" <br>");
// // 2. number
// let num = 10;
// document.write(num);
// document.write(" <br>");
// // 3. boolean
// let bool = true;
// document.write(bool);
// document.write(" <br>");
// // 4. object
// let obj = {name:"yash",age:21};
// document.write(obj.name);
// document.write(" <br>");
// // 5. array
// let arr = [1,2,3,4,5];
// document.write(arr[1]);
// document.write(" <br>");
// // 6. undefined
// let und;
// document.write(und);
// document.write(" <br>");
// // 7. null
// let nu = null;
// document.write(nu);
// document.write(" <br>");
// // 8. symbol
//     // let sym = Symbol("this is symbol");
//     // document.write(sym);

// //ternary condition
// condition =10;
// (condition>5)?z = true :false;
// console.log(z);
// document.write(" <br>");
// document.write(z);

// //alerts
// alert("this is alert");

// //confirm box
// let con = confirm("are you sure");
// if(con == true){
//     document.write("you have clicked ok");
// }
// else{   
//     document.write("you have clicked cancel");
// }

// //prompt box
// let prom = prompt("enter your name");           
// document.write(prom);



// //events
// function clickme(){
//     alert("you have clicked me");
// }

// var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"]; 
//   console.log(burger[2]);

//   console.log(burger.length);

// Template Literals
let obj ={
  "name":"yash",
  "college":"Chandigarh University",
}
let student =`The student name is ${obj.name} and he is a student from ${obj.college}`; // this thing after the dollar sign is called as interpolation
console.log(student);