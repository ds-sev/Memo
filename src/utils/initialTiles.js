import { shuffle } from './shuffle.js'

const initialTiles = () => {
  let tiles = []

  for (let i = 0; i < 16; i += 2) {
    let index = Math.floor(Math.random() * 1000)

    tiles.push({
      id: i,
      rel: i + 1,
      flipped: false,
      url: `https://loremflickr.com/320/240/paris,brazil,rio?random=${index}`,
      discovered: false
    })

    tiles.push({
      id: i + 1,
      rel: i,
      flipped: false,
      url: `https://loremflickr.com/320/240/paris,brazil,rio?random=${index}`,
      discovered: false
    })
  }
  return shuffle(tiles)
}

export default initialTiles
