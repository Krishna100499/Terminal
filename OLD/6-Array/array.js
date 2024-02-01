const log = (...param) => console.log(...param);
const arr = [3, 5, 6, 8, 9];

// const mapReturn = arr.map((value) => {
//     return (value *= 3);
//   });
// const mapFilter =mapReturn.filter((value) => {
//     return value % 2 == 0;
// });
// const mapreduce = mapFilter.reduce((acc, value) => {
//     return (acc += value);
//   }, 0);
// console.log(mapReturn)
// console.log(mapFilter)
// console.log(mapreduce)

  const result = arr
  .map((value) => value * 3)
  .filter((value) => value % 2 == 0)
   .reduce((acc, val) => (acc += val), 0);

console.log(result);