/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split('').sort().join(''); //aet
    (obj[letters]) ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

console.log(groupAnagrams(strs));

/*
Time complexity: O(n*klog(k))
Space complexity: O(n)
*/
