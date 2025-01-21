/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedEntries[i][0]);
    }

    return result;
};
