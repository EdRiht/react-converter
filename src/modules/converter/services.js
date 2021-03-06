import { MAX_INTEGER_VALUE } from "./constants";

export const toRoman = value => {
  if (!value || parseInt(value) > MAX_INTEGER_VALUE) {
    return null;
  }

  var lookup = {
      M̅: 1000000,
      D̅: 500000,
      C̅: 100000,
      L̅: 50000,
      X̅: 10000,
      V̅: 5000,
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = "",
    i;
  for (i in lookup) {
    while (value >= lookup[i]) {
      roman += i;
      value -= lookup[i];
    }
  }
  return roman;
};

export const toArabic = str => {
  var str = str.toUpperCase(),
    validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
    token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
    key = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    num = 0,
    m;
  if (!(str && validator.test(str))) {
    return false;
  }
  while ((m = token.exec(str))) num += key[m[0]];
  return num;
};
