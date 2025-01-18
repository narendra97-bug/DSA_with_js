function longestCommonPrefix(strs) {
    let prefix=strs[0]
    
     for(let i=0;i<strs.length;i++)
      {
         let string=strs[i]
        while(!string.startsWith(prefix))
         {
           prefix=prefix.slice(0,-1)
           if(!prefix)
              return ""
         }
      }
      return prefix
}

// Example Usage
// Example 1
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

// Example 2
const strs2 = ["dogcar", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""
