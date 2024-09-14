//A. TRUTHY/FALSY VALUE
//  1.
function isTruthy(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}
console.log(isTruthy(0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(""));
console.log(isTruthy(false));
console.log(isTruthy(1));
console.log(isTruthy("hello"));
console.log(isTruthy([]));
// 2.
let arr = [0, 6, "hell", null, false];

function countFalsyValue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      count++;
    }
  }
  return count;
}
console.log(countFalsyValue(arr));

// 3.
let arr1 = [0, "", {}, "hello", undefined, false, 6];
function filterFalsyValue(arr1) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
console.log(filterFalsyValue(arr1));

//B. COMPARISON OPERATOR
//  1.
function compareNumbers(a, b) {
  if (a > b) {
    return "a greater than b";
  } else if (a < b) {
    return "a less than b";
  } else if (a == b) {
    return "a is equal to b";
  }
}
console.log(compareNumbers(3, 5));

console.log(compareNumbers(9, 5));

// 2.

function compareNumbersWithValues(num, value) {
  let results = [];
  numbers.forEach((num) => {
    let result = `${num}  is`;
    if (num > value) {
      result += `greater than ${value}`;
    } else if (num < value) {
      result += `less than ${value}`;
    } else if (num >= value) {
      result += `greater than or equal to ${value}.`;
    } else if (num <= value) {
      result += `less than or equal to ${value}.`;
    }
    results.push(result);
  });

  return results.join("\n");
}
let numbers = [1, 2, 3, 4, 5, 6, 12, 34];
let value = 10;
console.log(compareNumbersWithValues(numbers, value));

// 3.
function compareThreeNumbers(a, b, c) {
  if (a == b && b == c) {
    return "a ,b ,c are equal";
  } else if (a == b) {
    if (a > c) {
      return "a and b are equal and greater than c";
    } else if (a < c) {
      return "c greater than a and b and a and b are equal ";
    } else {
      return "a and b are equal and c is equal to them";
    }
  } else if (b == c) {
    if (a > b) {
      return "a is the largest and b and c are equal";
    } else if (a < b) {
      return "a is smallest and b and c are equal";
    } else {
      return "a,b,c are equal";
    }
  } else if (a === c) {
    if (a > b) {
      return "a and c are equal and both are greater than b";
    } else if (a < b) {
      return "b is the largest and a and c are equal";
    } else {
      return "a and c are equal and b is equal to them";
    }
  } else {
    if (a > b && a > c) {
      return "a is the largest";
    } else if (b > a && b > c) {
      return "b is the largest";
    } else {
      return "c is the largest";
    }
  }
}

// C. MATHEMETICAL OPERATORS

//  1.

function performArithmetic(a, b) {
  return {
    addition: a + b,
    subtraction: a - b,
    multiply: a * b,
    divide: a / b,
  };
}

let a = 3;
let b = 5;
let result4 = performArithmetic(a, b);
console.log(result4);

// 2.
function calculateAverage(numbers2) {
  let sum = 0;
  let count = 0;
  numbers2.forEach((num) => {
    sum += num;
    count++;
  });
  return count === 0 ? 0 : sum / count;
}
let numbers2 = [1, 4, 7, 8, 9];
console.log(calculateAverage(numbers2));

// 3.

function calculateExpression(a, b, c) {
  let result = ((a + b) * c) / (b - a);
  return result;
}
let c = 5;
console.log(calculateExpression(a, b, c));

// D. Relational Operator
// 1.

function checkRelational(a1, b1) {
  if (a1 > b1) {
    return "a1 is greater than b1";
  } else if (a1 < b1) {
    return "a1 is lesser than b1";
  } else {
    return "a1 & b1 are equal";
  }
}
let a1 = 64;
let b1 = 17;

console.log(checkRelational(a1, b1));

// 2.

function isInRange(value, min, max) {
  return value >= min && value <= max;
}
console.log(isInRange(5, 1, 10));
console.log(isInRange(15, 1, 10));
console.log(isInRange(1, 1, 10));
console.log(isInRange(10, 1, 10));

// 3.

// function evaluateConditions(a,b,c){
//     if ( a>b && a>c){
//         return "a is the largest "
//     }
//     else if()
// }

// E.LOGICAL OPERATORS

function logicalOperations(a, b) {
  let result = a || b;
  return result;
}
console.log(logicalOperations(4, 0));
console.log(logicalOperations(null, 0));

// 2.
function isEligible(age, hasPermission) {
  if (age <= 18 && hasPermission) {
    return "hasPermisson";
  }
}
console.log(isEligible(14, true));

// 3.
function evluateConditions(a, b, c) {}

// F. CONDITIONAL STATEMENTS

// 1.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else if (num % 2 === 1) {
    return "Odd";
  }
}
console.log(checkEvenOdd(6));

//  2.
function evaluateGrade(score) {
  if (score > 90 && score <= 100) {
    return "A";
  } else if (score > 80 && score <= 90) {
    return "B";
  }
}
console.log(evaluateGrade(88));

//  3.

function calculateDiscount(price, isMember) {
  let discount = 0;

  if (isMember) {
    discount = 0.1;
  }
  let discounted_price = price * (1 - discount);
  return discounted_price;
}
let price = 100;
let isMember = true;
console.log(calculateDiscount(price, isMember));

//  G . Postfix & Prefix

function prefixPostfixDemo(a, b) {
  let postfix = a++;
  let prefix = ++b;
  return postfix, prefix;
}
console.log(prefixPostfixDemo(4, 6));
