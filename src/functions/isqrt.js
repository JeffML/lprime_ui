// integer square root function, big int style
function isqrt(n) {
  let a = 1n;
  let b = (n >> 5n) + 8n;
  while (b >= a) {
    let mid = (a + b) >> 1n;
    if (mid * mid > n) {
      b = mid -= 1n;
    } else {
      a = mid += 1n;
    }
  }
  return (a -= 1n);
}

export default isqrt