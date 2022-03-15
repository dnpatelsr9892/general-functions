const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
const power = (a, b) => a ** b;
const factorial = (a) => {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
};
const square = (a) => a * a;
const cube = (a) => a * a * a;
const squareRoot = (a) => Math.sqrt(a);
const cubeRoot = (a) => Math.cbrt(a);
const absolute = (a) => Math.abs(a);
const round = (a) => Math.round(a);
const floor = (a) => Math.floor(a);
const ceil = (a) => Math.ceil(a);
const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);
const tan = (a) => Math.tan(a);
const asin = (a) => Math.asin(a);
const acos = (a) => Math.acos(a);
const atan = (a) => Math.atan(a);
const log = (a) => Math.log(a);
const ln = (a) => Math.log(a);
const exp = (a) => Math.exp(a);
const random = (a) => Math.random(a);
const pi = Math.PI;
const e = Math.E;
const phi = (a) => (1 + Math.sqrt(5)) / 2;
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const lcm = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  return (a * b) / gcd(a, b);
};
const fibonacci = (a) => {
  if (a <= 1) {
    return a;
  }
  return fibonacci(a - 1) + fibonacci(a - 2);
};
const prime = (a) => {
  if (a < 2) {
    return false;
  }
  if (a % 2 === 0) {
    return a === 2;
  }
  let i = 3;
  while (i * i <= a) {
    if (a % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
};
// String Functions
const charAt = (a, b) => a.charAt(b);
const charCodeAt = (a, b) => a.charCodeAt(b);
const concat = (a, b) => a.concat(b);
const indexOf = (a, b) => a.indexOf(b);
const lastIndexOf = (a, b) => a.lastIndexOf(b);
const localeCompare = (a, b) => a.localeCompare(b);
const match = (a, b) => a.match(b);
const replace = (a, b, c) => a.replace(b, c);
const search = (a, b) => a.search(b);
const slice = (a, b, c) => a.slice(b, c);
const split = (a, b) => a.split(b);
const substring = (a, b, c) => a.substring(b, c);
const toLowerCase = (a) => a.toLowerCase();
const toLocaleLowerCase = (a) => a.toLocaleLowerCase();
const toUpperCase = (a) => a.toUpperCase();
const toLocaleUpperCase = (a) => a.toLocaleUpperCase();
const trim = (a) => a.trim();
const trimLeft = (a) => a.trimLeft();
const trimRight = (a) => a.trimRight();
const padStart = (a, b, c) => a.padStart(b, c);
const padEnd = (a, b, c) => a.padEnd(b, c);
const repeat = (a, b) => a.repeat(b);
const includes = (a, b) => a.includes(b);
const startsWith = (a, b) => a.startsWith(b);
const endsWith = (a, b) => a.endsWith(b);
const fromCharCode = (a) => String.fromCharCode(a);
const fromCodePoint = (a) => String.fromCodePoint(a);
//  Array Functions
const array = (a) => Array.from(a);
const copyWithin = (a, b, c) => a.copyWithin(b, c);
const fill = (a, b, c) => a.fill(b, c);
const find = (a, b) => a.find(b);
const findIndex = (a, b) => a.findIndex(b);
const flat = (a, b) => a.flat(b);
const flatMap = (a, b) => a.flatMap(b);
const isAnagram = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  a = a.split('').sort().join('');
  b = b.split('').sort().join('');
  return a === b;
};
const isPalindrome = (a) => {
  b = a.split('').reverse().join('');
  return b === a;
};
const isPrime = (a) => {
  if (a < 2) {
    return false;
  }
  if (a % 2 === 0) {
    return a === 2;
  }
  let i = 3;
  while (i * i <= a) {
    if (a % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
};
const last = (a) => a[a.length - 1];
const nth = (a, b) => a[b];
const nthLast = (a, b) => a[a.length - b];
const range = (a, b, c) => {
  let d = [];
  if (c === undefined) {
    c = 1;
  }
  for (let i = a; i <= b; i += c) {
    d.push(i);
  }
  return d;
};
