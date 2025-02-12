/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let minLen=Number.MAX_SAFE_INTEGER;

    let start=0;
    let currSum=0;
    
    for(let end=0;end<nums.length;end++)
    {
        currSum=currSum+nums[end];

        if(currSum>=target)
        {
            minLen= Math.min(minLen,end-start+1);
            while(currSum>=target)
            {
                currSum= currSum-nums[start];
                start++;
                if(currSum>=target)
                {
                    minLen= Math.min(minLen,end-start+1);
                }
            }
        }
    }

    if(minLen===Number.MAX_SAFE_INTEGER)
    {
        return 0;
    }

    return minLen;
    
};