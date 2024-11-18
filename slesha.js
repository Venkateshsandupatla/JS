// some comment

function largetSum(nums){
  let n = nums.length;
  let ans = solve(nums,n-1);
  return ans;
}

function solve(nums,n){

  // base case
  if(n<0){
      return 0;
  }
  if(n==0){
      return nums[0];
  }

  let incl = solve(nums,n-2) + nums[n];
  let excl = solve(nums,n-1) + 0;

  return Math.max(incl,excl);

}

let nums = [5,1,1,5];
console.log(largetSum(nums));