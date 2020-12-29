/* global BigInt */

import isqrt from "./isqrt";

/*
Prime Number generator, circa 12-20-2020

This program produces multiple classes of prime numbers ending in 1, 3,7, or 9. 
Input A can be andy Integer>=0. An increase yields higher primes in the class.
Input N can be any prime number >23 that ens in 1, 3, 7, or 9
*/

//////////////////////////////////////////////
// this is the outer function, which initiates the calculations.
/////////////////////////////////////////////
function* calcPrimes(args) {
  let { nval = 210, cval, dval, adder } = args;
  console.log({ args });
  let N = BigInt(nval);
  let C = BigInt(cval);
  let D = BigInt(dval);
  let B = isqrt(N);
  const Z = BigInt(adder);

  // numPrimes = parseInt(numPrimes);
  // let count = 0;

  let func; // current func reference
  let then; // start time of new prime search

  const END = () => {
    //marker function for end-of-processing
  };

  const lbl10 = () => {
    //LBL 10
    if (N % C === 0n) return (func = lbl12); // if fPart(N/C)=0: Goto 12
    if (C >= B) return (func = lbl11); // if C≥B: Goto 11
    if (N % D === 0n) return (func = lbl12); // if fPart(N/D)=0: Goto 12
    if (D >= B) return (func = lbl11); // if D≥B: Goto 11
    C += 6n;
    D += 6n;
    func = lbl10; // Goto 10
  };

  const lbl11 = () => {
    //LBL 11
    func = YIELDPRIME;
  };

  const YIELDPRIME = () => {}; // marker function

  const lbl12 = () => {
    //LBL 12
    N += Z; // N + Z -> N
    C = 7n;
    D = 11n;
    func = lbl10; // Goto 10
  };

  /* ******** */
  /* --MAIN-- */
  /* ******** */

  func = lbl10; // start of function chain

  // loop until done...
  then = window.performance.now(); // in floating milliseconds

  do {
    if (func === YIELDPRIME) {
      const now = window.performance.now(); //floating milliseconds
      const time = (now - then) / 1000;
      then = now;
      yield { prime: N, time };
      // if (count === 4 /* numPrimes */) return (func = END);
      N += N * Z;
      B = isqrt(N);
      C = 7n;
      D = 11n;
      func = lbl10;
      // func = END;
    }
    func();
  } while (func !== END);

  return;
}

function* primes({ args }) {
  yield* calcPrimes(args);
  // const totalPrimeTime = times.reduce((a, b) => a + b, 0.0);
}

export default primes;
