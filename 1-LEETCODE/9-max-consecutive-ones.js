var longestOnes = function(nums, k) {
    let flip = 0;
    let start = 0;
    let maxLen = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            flip++;
        }

        while (flip > k) {
            if (nums[start] === 0) {
                flip--;
            }
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};
