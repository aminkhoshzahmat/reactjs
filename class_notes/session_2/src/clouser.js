/**
 * 1- Private variables (isolate the, so other package won't rewirte yours)
 * 2- Memorize
 */
function func(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(func(2)(5)(8));

const func2 = func(20);
// inja behesh a nadadim, a memorize karde, func2 alan midune a chie
console.log(func2(5)(10));

const func3 = func2(10);

console.log(func3(60));

//////////////////////

function CounterWrapper() {
  let counter = 0;

  function increase() {
    console.log(++counter);
  }

  function decrease() {
    console.log(++counter);
  }

  return { increase, decrease };
}

const myCounter = CounterWrapper();

console.log(myCounter);
