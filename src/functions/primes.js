/* global BigInt */

import isqrt from './isqrt'

let dbgOn = false;

/*
Prime Number generator, circa 10-10-2020

This program produces multiple classes of prime numbers ending in 1, 3,7, or 9. 
Input A can be andy Integer>=0. An increase yields higher primes in the class.
Input N can be any prime number >23 that ens in 1, 3, 7, or 9
*/

//////////////////////////////////////////////
// this is the outer function, which initiates the calculations. 
// Labeled "MINUS23" in Dad's spreadsheet
/////////////////////////////////////////////
const calcPrimes = ({aval:A, nval:N, cval:C, dval:D, adder, numPrimes}, setResults) => {   // (INPUT A, INPUT N, number of primes to generate)
  A = BigInt(A)
  N = BigInt(N)
  C = BigInt(C)
  D = BigInt(D)
  numPrimes = parseInt(numPrimes)
  adder = BigInt(adder)
  
  N = N + A*adder   // N + A*233,092,870 -> N
  let B = isqrt(N);  // iPart(√(N)) -> B
  // let C = C;      // 25 -> C
  // let D = D;      // 29 -> D

  const primes = [];
  const times = [];

  setResults({primes, times})

  let func; // current func reference
  let then  // start time of new prime search

  const maxdbg = process.env.DBG ? parseInt(process.env.DBG) : 0;
  let dbgCt = 0;
  dbgOn = maxdbg !== 0;

  const dbg = () => {
    console.log({
      func: func.name,
      A,
      B,
      C,
      D,
      N,
      primes
    });
    dbgCt++;
    if (dbgCt >= maxdbg) process.exit();
  };

  const END = () => {
    //marker function for end-of-processing
  };

  const lbl10 = () => { //LBL 10
    if (N % C === 0n) return (func = lbl12)   // if fPart(N/C)=0: Goto 12
    if (C >= B) return (func = lbl11)         // if C≥B: Goto 11
    if (N % D === 0n) return (func = lbl12)   // if fPart(N/D)=0: Goto 12
    if (D >= B) return (func = lbl11)         // if D≥B: Goto 11
    C += 6n       // C+6 -> C
    D += 6n       // D+6 -> D
    func = lbl10  // Goto 10
  };

  const lbl11 = () => { //LBL 11
    const now = window.performance.now();   //floating milliseconds
    times.push((now-then)/1000)
    then = now;

    const count = primes.push(N) 
    setResults({primes, times})

    if (count === numPrimes) return (func = END)  // N->P, Disp P (stops on requested number of primes)
    func = lbl12;   // rest of 11 is same as all of 12; so Goto 12
  };

  const lbl12 = () => { //LBL 12
    N += adder   // N + 233,092,870 -> N
    B = isqrt(N)  // iPart(√(N)) -> B
    C = 25n       // 25 -> C
    D = 29n       // 29 -> D
    func = lbl10  // Goto 10
  }

  /* ******** */
  /* --MAIN-- */
  /* ******** */

  func = lbl10  // start of function chain

  // loop until done...
  then = window.performance.now() // in floating milliseconds

  do {
    if (dbgOn) dbg();
    func();
  } while (func !== END);

  return {primes, times};
};


const primes = (values, setResults, setTotalPrimeTime) => {
  const {aval, nval, cval, dval, adder, numPrimes} = values;

  const responses = generatePrimes({ aval, nval, cval, dval, adder, factorize:false, numPrimes }, setResults);

  return responses;
};

function generatePrimes(args, setResults) {
  let {primes, times} = generatePrimesImpl(args, setResults);

  const totalPrimeTime = times.reduce((a, b) => a+b, 0.0)

  return {primes, times, totalPrimeTime};
}

function generatePrimesImpl(args, setResults) {
  const {primes, times} = calcPrimes(args, setResults);

  const response = {
    primes,
    times
  };
  return response;
}

export default primes