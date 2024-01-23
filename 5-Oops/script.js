// // //factory method
// function manufactorecar(name, engine, bodytype)// Paramaters
// {  
//     return{
//         name,
//         engine,
//         bodytype,
//         startmanufacturing: function(){   // function in the Menthod ( Name - startmanufacturing)
//             console.log(`
//             started the manufactoring car ${name} 
//             with the engine capacity of ${engine} liter
//             and this is the type of ${bodytype}`)     // String litrals
//     }
//     }
// }

// const virtus= manufactorecar("virtus","1","sedan")  // passsing arguments in the function 
// console.log(virtus);
// virtus.startmanufacturing();   // calling startmanufacturing Method

// const polo= manufactorecar("polo","1.5","hatchback")
// // console.log(polo);
// // polo.startmanufacturing();

//  this - Keyword
//   holds the data of immediate parent object
//   ifinside arrow methos always target global object
//   var name = "globalname";
//   const outerobj = {
//     name: "aravind",
//     batch: "weekend",
//     innerobj: {
//       name: "sanjay",
//       getdetails: function () {
//         //   console.log(outerobj.innerobj.name); // Sanjay
//         console.log(this.name);     // immediate parant object name will be displayed in an Normal Function
//       },
//       getdata: () => {
//         console.log(this.name);   // but in the arrow function  globle object name will be dispalayed
//       },
//       getglobalinarrow() {
//         // if we want to target immediate parent object
//         // wrap up arrow in normal method
//         const arrowmethod = () => {
//           console.log(this.name);
//         };
//         arrowmethod();
//       },
//     },
//   };
//   outerobj.innerobj.getdetails();
//   outerobj.innerobj.getdata();      
//   outerobj.innerobj.getglobalinarrow();
 //constructor functions
 // in this on the Output the Function name will be Disaplayed so it will be Easly Identifed where we are
 function manufactCar(name, engine, bodyType) {
    // {} empty object
    this.name = `${name} volkswagon`;  // we are constructing into the Empty Object
    this.engine = engine;
    this.bodyType = bodyType;
    this.startmanufacture = function () {
      console.log(`
            Started the manufacturing car ${this.name}
            with engine capacity of ${this.engine} liter
            and this is of type ${this.bodyType}
                                    `);
    };
  }
  const tiguan = new manufactCar("Tiguan", 2, "SUV");
  console.log(tiguan);
  tiguan.startmanufacture();
  
  //prototypes
  manufactCar.prototype.getNameOfCar = function () {   
        // prototype can we only used in menthod not in declearing new Key
       // checking new menthod in the Manufactcar function without distrubing the actual funtcion
    console.log(`The name of the car is ${this.name}`);
  };
  
  const passat = new manufactCar("passat", 2, "sedan");  // new will create empty object
  console.log(passat);
  passat.startmanufacture();
  passat.getNameOfCar();