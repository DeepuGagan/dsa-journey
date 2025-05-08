// Linear Scan with Tracking Variables (Greedy Selection)

`https://leetcode.com/problems/second-largest-digit-in-a-string/`




// My method


const input = 'dfr34wtyhg678'

const SLNIS = (string) => {
  const [n1, n2] = string
    .split('')
    .map(a => parseInt(a))
    .filter(a => a !== NaN)
    .reduce((acc, curr) => {
      const [first, second] = acc
      if (curr > first) {
        second = first
        first = curr
      } else if (curr > second && curr < first) {
        second = curr
      }
      return [first, second]
    }, [-Infinity, -Infinity])

  return n2 === -Infinity ? -1 : n2

}

/**
 * NaN === NaN      //false
 * NaN !== NaN      //true
 * so
 *.filter(ch => ch >= '0' && ch <= '9')
 *.map(d => parseInt(d))
 */



// DSA method

const getSecondLargestDigit = (s) => {
  let largest = -1, secondLargest = -1;
  
  for (let char of s) {
      if (char >= '0' && char <= '9') {  // Check if it's a digit
          const digit = parseInt(char);
          
          // Update largest and secondLargest
          if (digit > largest) {
              secondLargest = largest;  // Update second largest to the old largest
              largest = digit;          // Update largest
          } else if (digit > secondLargest && digit < largest) {
              secondLargest = digit;    // Update second largest if valid
          }
      }
  }
  
  return secondLargest === -1 ? -1 : secondLargest;
}



