//var
//1. Hoisting 
//2. Global Scope
//3. Re-Declaration is allowed
//let
//1. Prevents Hoisting
//2. Block Scope
//3. Re-Declaration not allowed

// Errors
//1. Compile Time Error
//2. Run Time Error 

// console.log(pi * 10 * 10)
// let pi = 22/7
// console.log(pi)


// if(true)
// {// start of scope
//     var a = 20
//     console.log("Inside Scope:",a)
// }//end of scope
// console.log("Outside Scope:",a)

// function area(){//function scope starts
//     var a = 10
//     console.log(a)
// }//function scope ends - all memory gets destroyed

// area()
// console.log(a)

// let a = 10//declaration
// a = 20 //re-assignment
// let a = 30//re-declaration

//re-assignment - value updates in existing memory
//re-declaration - existing memory is destroyed new memory is creatd and value is assigned


//const - same as let, no re-assignment is allowed



// Spread and Rest Operator (...)
//Arrays/Strings/JSON are Mutable
// let a = [1,2,3,4,5]
// let b = a//shallow copy or copy by refrence
// let c = [...a]//deep copy or copy by value  ====> using Spread Operator
// b.push(20)
// c.push(10)
// console.log(a,b,c)

//a=[1,2,3,4,5]
// [...a]==>1,2,3,4,5 ==> [...1,2,3,4,5]

// [1,2,3,4,5] ===> 1,2,3,4,5,6



// let a = [1,2,3,4,5]
// let op = ""
// for(let i =0;i<a.length;i++)
// {
//     if(a.length-1 != i)
//     {
//         op = op + a[i] + " "
//     }
//     else
//     {
//         op = op + a[i]
//     }
// }
// console.log(op,...a)

// function sum(...args){//rest operator
//     console.log(args)
// }
// console.log(sum(10,5,11,12,33))


//Spread Operator : Array ==> Individual Values
// Rest Operator : Individual values ==> array

// let a = {
//     name:"Nag",
//     email:"nag@gmail.com"
// }
// a.income=20
// let array = [1,"Hai",true]
// console.log(...array)

// let b = {...a}
// b.name="Srini"
// console.log(a)


//Array and Object Destructure
// The destructuring assignment syntax is a JavaScript expression that makes it possible to 
// unpack values from arrays, or properties from objects, into distinct variables
// let obj = {
//     name:"Naga",
//     email:"naga@gmail.com",
//     mobile:"965456789",
//     city:"Chennai"
// }
// let name = obj.name
// let email = obj.email
// let mobile = obj.mobile
// let city = obj.city

// let {name} = obj//object destructure
// console.log(name)


// let a = [10,20,30,40]
// let [value1,value2,...others] = a//array destructure

// console.log(value1,value2,others)




//object Shorthand
// let name = "Vel"
// let email = 'vel@vel.com'
// let batch = 'B50'
// {
    //     name:"Naga",
    //     email:"naga@gmail.com",
    //     mobile:"965456789",
    //     city:"Chennai"
    // }

// console.log({
//     name,
//     email,
//     batch
// })

//String Literal ---> Backticks present below escape button
// console.log("The "+email+ " belongs to the student "+ name + " of batch "+batch)//conentional way
// console.log(`The ${email} belongs to the student ${name} of batch ${batch}`)