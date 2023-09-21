import initialTiles from '../utils/initialTiles.js'

const initialState = {
  round: 1,
  firstTile: null,
  secondTile: null,
  pairsRevealed: 0,
  tiles: initialTiles()
}
export default function memory(state = initialState, action) {
  switch (action.type) {
    case 'FLIP_TILE': {

      let newState = { round: state.round + 1, pairsRevealed: state.pairsRevealed }

      if (state.round % 2 === 1) {
        let tileClicked = state.tiles.find((tile) => {
          return tile.id === action.id
        })

        Object.assign(newState, {
          firstTile: tileClicked.id,
          secondTile: null,
          tiles: state.tiles.map((tile) => {
            return tile.id === action.id ?
              Object.assign({}, tile, { flipped: true })
              :
              Object.assign({}, tile, { flipped: false })
          })
        })
      } else {
        let tileClicked = state.tiles.find((tile) => {
          return tile.id === action.id
        })

        if (tileClicked.rel === state.firstTile) {

          Object.assign(newState, {
            pairsRevealed: state.pairsRevealed + 1,
            firstTile: state.firstTile,
            secondTile: tileClicked.rel,
            tiles: state.tiles.map((tile) => {
              return (tile.id === action.id || tile.id === state.firstTile)
                ?
                Object.assign({}, tile, { flipped: true, discovered: true })
                :
                tile
            })
          })
        } else {
          Object.assign(newState, {
            firstTile: state.firstTile,
            secondTile: tileClicked.rel,
            tiles: state.tiles.map((tile) => {
              return tile.id === action.id
                ?
                Object.assign({}, tile, { flipped: true })
                :
                tile
            })
          })
        }
      }
      return newState
    }

    case 'RESTART':
      return {
        round: 1,
        firstTile: null,
        secondTile: null,
        pairsRevealed: 0,
        tiles: initialTiles()
      }

    default:
      return state

  }
}
