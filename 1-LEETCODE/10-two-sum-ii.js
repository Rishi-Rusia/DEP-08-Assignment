/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start=0;
    let end=nums.length-1;

    while(start<end)
    {
        if(nums[start]+nums[end]<target) start++;
        else if(nums[start]+nums[end]>target) end--;
        else return [start+1,end+1];
    }
};