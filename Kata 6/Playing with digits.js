// Playing with digits

// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
  let res = n
    .toString()
    .split("")
    .map((el, i) => Math.pow(Number(el), p + i))
    .reduce((acc, curr) => acc + curr, 0);
  return res % n === 0 ? res / n : -1;
}
