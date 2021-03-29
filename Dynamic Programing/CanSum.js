/* Can Sum.
(targetSum, numbersArray) => boolean (whether or not the target sun can be generated using the numbers from the array)
The same element can be used multiple times.
All inputs are non negative.
*/

const canSum =(targetSum, numbers, memo={}) => {
  if(memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;
  for(let num of numbers){
    const r = targetSum - num;
    if(canSum(r, numbers, memo)){
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }
  memo[targetSum] = false;
  return memo[targetSum];
}

// console.log(canSum(7,[2,3]));
console.log(canSum(7,[5,3,4,7]));
console.log(canSum(300,[7,14]));
