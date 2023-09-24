import { shuffle } from './shuffle.js'

export default function createTilesArray() {
  let tiles = []

  for (let i = 0; i < 16; i += 2) {
    let index = Math.floor(Math.random() * 1000)

    tiles.push({
      id: i,
      rel: i + 1,
      flipped: false,
      url: `https://picsum.photos/320/240?lock=${index}`,
      // url: `https://loremflickr.com/320/240/cat,dog?lock=${index}`,
      discovered: false
    })

    tiles.push({
      id: i + 1,
      rel: i,
      flipped: false,
      url: `https://picsum.photos/320/240?lock=${index}`,
      // url: `https://loremflickr.com/320/240/cat,dog?lock=${index}`,
      discovered: false
    })
  }
  return shuffle(tiles)
}
