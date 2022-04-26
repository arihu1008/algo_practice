/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/
let nums = [-1, 0, 1, 2, -1, -4];
/*

function threeSum(nums) {
  nums.sort((a,b) => a - b);
  let output = [];
  for(let i = 0; i < nums.length - 2; i++){
    let num1 = nums[i];
    if(i > 0 && num1 == nums[i -1]) continue;
    for(let j = i + 1; j < nums.length - 1; j++){
      let num2 = nums[j];
      for(let k = j + 1; k < nums.length; k++){
        let num3 = nums[k];
        if(num1 + num2 + num3 == 0) {
          output.push([num1, num2, num3]);
        }
      }
    }
  }
  return output;
}
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    if (i > 0 && num1 === nums[i - 1]) continue;
    const target = 0 - num1;
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        output.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }

  }
  return output;
}

console.log(threeSum(nums))
