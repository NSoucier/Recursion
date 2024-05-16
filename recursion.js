/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i === words.length) return 0
  let next = longest(words, i+1);
  return words[i].length >= next ? words[i].length : next
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (!str[i]) return ''
  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, head=0, tail=str.length-1) {
  if (head >= tail) return true
  return (str[head] === str[tail]) ? isPalindrome(str, head+1, tail-1) : false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (!arr[i]) return -1
  return (arr[i] === val) ? i : findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, tail=str.length-1) {
  if (!str[tail]) return ''
  return str[tail] + revString(str, tail-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (val of Object.values(obj)) {
    if (typeof val === 'string') arr.push(val)
    if (typeof val === 'object') arr.push(...gatherStrings(val))
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, head=0, tail=arr.length-1) {
  if (head > tail) return -1

  let middle = Math.floor((tail+head)/2);
  
  if (val === arr[middle]) {
    return middle
  } else if (val > arr[middle]) {
    return binarySearch(arr, val, head=middle+1, tail);
  } else {
    return binarySearch(arr, val, head, tail=middle-1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
