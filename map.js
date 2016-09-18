'use strict';

const a = ['a', 'b', 'c', 'd'];


const index = 2;

//0, 1 , 3 -> true
//2 -> false
//() => {} evalua a true toma el valor
//evalua a false no lo toma
const b = a.filter((item, i) => i !== index);

console.log(a);
console.log(b);

const sumar = (a, b) => {
  return a + b;
};

const logger = () => {
  console.log(arguments);
  sumar();
}
