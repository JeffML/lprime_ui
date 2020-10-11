import isqrt from './isqrt'

// factorization function, for testing candidate primes
function factor(n) {
  if (n < 0n) return "-" + factor(-n);
  var minFactor = leastFactor(n);
  if (n == minFactor) return "" + n;
  return minFactor + "*" + factor(n / minFactor);
}

// find the least factor in n by trial division
function leastFactor(n) {
  if (n == 0n) return 0n;
  if (n % 1n || n * n < 2n) return 1n;
  if (n % 2n == 0n) return 2n;
  if (n % 3n == 0n) return 3n;
  if (n % 5n == 0n) return 5n;
  var m = isqrt(n);
  for (var i = 7n; i <= m; i += 30n) {
    if (n % i == 0n) return i;
    if (n % (i + 4n) == 0n) return i + 4n;
    if (n % (i + 6n) == 0n) return i + 6n;
    if (n % (i + 10n) == 0n) return i + 10n;
    if (n % (i + 12n) == 0n) return i + 12n;
    if (n % (i + 16n) == 0n) return i + 16n;
    if (n % (i + 22n) == 0n) return i + 22n;
    if (n % (i + 24n) == 0n) return i + 24n;
  }
  return n;
}

const factorize = (primeCandidates) => {
  return primeCandidates.map(p => factor(p))
}

export default factorize