`https://leetcode.com/problems/koko-eating-bananas/description/`

//my method

const KEB = (piles, h) => {
  let speed = 1

  while (true) {
    let totalTime = 0
    for (let pile of piles) {
      totalTime += Math.ceil(pile / speed)
    }
    if (totalTime <= h) {
      return speed
    }
    speed++
  }
}


const KEB2 = (piles, h) => {
  let l = 0
  let r = Math.max(...piles)
  let speed = 1
  while (l <= r) {
    let totalTime = 0
    let m = Math.floor((l + b) / 2)
    for (let pile of piles) {
      totalTime += Math.ceil(pile / m)
    }
    if (totalTime <= h) {
      r = m - 1
      speed = m
    } else {
      l = m + 1
    }
  }
  return speed
}