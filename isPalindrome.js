// Write your code below``
// Write your code below
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < (str.length - 1) / 2; i++) {
      if (str[i] !== str[j]) {
        return false
      }
      j--
    }
    return true
  }

  console.log(isPalindrome('noon'))