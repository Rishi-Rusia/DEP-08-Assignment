/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let left=1;
    let right=1;
    let answer=[];
    // let answer = new Array(nums.length).fill(1)
    for(let i=0;i<nums.length;i++)
    {
        answer.push(1);
        answer[i]=answer[i]*left;
        left=left*nums[i];
    }

    for(let i=nums.length-1;i>=0;i--)
    {
        answer[i]=answer[i]*right;
        right=right*nums[i];
    }

    return answer;
};