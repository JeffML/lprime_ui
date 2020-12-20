/* global BigInt */

import isqrt from "./isqrt";

let dbgOn = false;

/*
Prime Number generator, circa 10-10-2020

This program produces multiple classes of prime numbers ending in 1, 3,7, or 9. 
Input A can be andy Integer>=0. An increase yields higher primes in the class.
Input N can be any prime number >23 that ens in 1, 3, 7, or 9
*/

//////////////////////////////////////////////
// this is the outer function, which initiates the calculations.
/////////////////////////////////////////////
const calcPrimes = (
  { nval: N, cval, dval, adder, numPrimes },
  setPrimes,
  setTimes
) => {
  N = BigInt(N);
  let C = BigInt(cval);
  let D = BigInt(dval);
  let B = isqrt(N);
  const Z = BigInt(adder);
  let times = [];
  let primes = [];

  numPrimes = parseInt(numPrimes);
  setPrimes([]);
  setTimes([]);

  let func; // current func reference
  let then; // start time of new prime search

  const maxdbg = process.env.DBG ? parseInt(process.env.DBG) : 0;
  let dbgCt = 0;
  dbgOn = maxdbg !== 0;

  const dbg = () => {
    console.log({
      func: func.name,
      B,
      C,
      D,
      N,
      primes,
    });
    dbgCt++;
    if (dbgCt >= maxdbg) process.exit();
  };

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
    const now = window.performance.now(); //floating milliseconds
    times.push((now - then) / 1000);
    then = now;

    const count = primes.push(N);
    setPrimes([...primes]);
    setTimes([...times]);

    if (count === numPrimes) return (func = END); // N->P, Disp P (stops on requested number of primes)
    N += N * Z;
    B = isqrt(N);
    C = 7n;
    D = 11n;
    func = lbl10;
  };

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
    if (dbgOn) dbg();
    func();
  } while (func !== END);

  return { primes, times };
};

const primes = (values, setPrimes, setTimes) => {
  const { nval, cval, dval, adder, numPrimes } = values;

  const responses = generatePrimes(
    { nval, cval, dval, adder, factorize: false, numPrimes },
    setPrimes,
    setTimes
  );

  return responses;
};

function generatePrimes(args, setPrimes, setTimes) {
  let { primes, times } = generatePrimesImpl(args, setPrimes, setTimes);

  const totalPrimeTime = times.reduce((a, b) => a + b, 0.0);

  return { primes, times, totalPrimeTime };
}

function generatePrimesImpl(args, setPrimes, setTimes) {
  const { primes, times } = calcPrimes(args, setPrimes, setTimes);

  const response = {
    primes,
    times,
  };
  return response;
}

export default primes;
