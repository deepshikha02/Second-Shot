/* how many ways can you travel to your goal in an m X n grid.
1. You are begining in the top left corner (0,0)
2. ou have to travel to bottom right (m X n)
3. You can only move 1 right or 1 down.
*/

const gridTraveller = (m,n, memo={}) => {
  const key = `${m},${n}`;
  if(memo[key]) return memo[key];
  if(m===0 || n === 0)  return 0;
  if(m === 1 && n === 1) return 1;
  return memo[key];
}

console.log(gridTraveller(2,3));
console.log(gridTraveller(18,18));
