/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    if (s.length === 0) {
        return 0;
    }

    let queue = [];
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (queue.includes(s[i])) {
            while (queue[0] != s[i]) {
                queue.shift();
            }

            queue.shift();
        }

        queue.push(s[i]);

        if (queue.length > result) {
            result = queue.length;
        }
    }

    return result;
};