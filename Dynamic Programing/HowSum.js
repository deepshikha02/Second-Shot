/**
 howSum(targetSum, numbersArray) =>
 [any combination of eelements that addd up to the targetSum]
 If no combination => return null.
 if multiple combination => return any one combination
*/


const howSum = (targetSum, numbers, memo={}) => {
  if(memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;
  for(let num of numbers){
    const res = howSum(targetSum-num, numbers, memo);
    if(res !== null) {
      memo[targetSum]  = [...res, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
}

console.log(howSum(8,[2,3,5]));
console.log(howSum(300,[7,14]));
