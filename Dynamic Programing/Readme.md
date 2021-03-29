#Memoization Steps

1. Make it work.
Like try out the recursive version in absolute brute force way.
  a. Visualise as a tree.
  b. implement the tree as recursion.
  c. test

2. Optimize
  a. Memoization
    add a memo object. mostly would need a map.
    default empty object works.
  b. add a base case to return the memo values. So this is just basically looking at the memo map.
  c. Store return values into the memo
