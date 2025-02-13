// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// let convert= (str)=>{
//     let result="";

//     for(c in str)
//     {
//         console.log(str[c]);
//         if( typeof(str[c])==="string" && ((str[c]<=122 && str[c]>=97) || (str[c]<=90 && str[c]>=65)))
//         {
//             result += str[c].toLowerCase();
//         }
//     }

//     console.log(result);

//     return result;
// }

// var isPalindrome = function(s) {
//     let p= convert(s);
//     console.log(p);
// };

/**
 * @param {string} s
 * @return {boolean}
 */

let convert = (str) => {
    let result = "";

    for (let c of str) {
        if (/[a-zA-Z0-9]/.test(c)) {
            result += c.toLowerCase();
        }
    }

    console.log(result);
    return result;
};

var isPalindrome = function(s) {
    let p = convert(s);

    let start=0;
    let end= p.length-1;

    

    while(start<end)
    {
        if(p[start]!=p[end])
        {
            return false;
        }

        start++;
        end--;
    }

    return true;
};
