// Linear Scan with Tracking Variables (Greedy Selection)

`https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735`

// My method & DSA way


const input = [1, 2, 3, 4, 3]

const secLargestNum = (arr) => {

  if (arr.length < 2) return -1

  const [num1, num2] = arr.reduce((acc, curr) => {
    const [first, second] = acc  // not requred if used directly without first,second destructure ... like acc[0] & acc[1]
    if (curr > first) {
      second = first
      first = curr
    } else if (curr > second && curr < first) {
      second = curr
    }
    return [first,second]
  }, [-Infinity, -Infinity])

  return (num2 === -Infinity) ? -1 : num2

}