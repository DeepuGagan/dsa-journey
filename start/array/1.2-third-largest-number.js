// Linear Scan with Tracking Variables (Greedy Selection)

`https://leetcode.com/problems/second-largest-digit-in-a-string/`




// my method & DSA


const TLN = (arr) => {

  const seen = new Set();

  const [n1, n2, n3] = arr.reduce((acc, curr) => {
    let [f, s, t] = acc
    // Ignore duplicates
    if (seen.has(curr)) return acc;
    seen.add(curr);
    if (curr > f) {
      t = s
      s = f
      f = curr
    } else if (curr > s) {
      t = s
      s = curr
    } else if (curr > t) {
      t = curr
    }
    return [f,s,t]
  }, [-Infinity, -Infinity, -Infinity])

  return (n3 === -Infinity) ? n1 : n3

}

// withput set -- good thing

`if (num === first || num === second || num === third) continue;  ----- in for loop 


if (num === first || num === second || num === third) return acc;  ----- in for reduce`
