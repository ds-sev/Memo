import './App.css'
import Tile from '../Tile/Tile.jsx'
import initialTiles from '../../utils/initialTiles.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MemoryActions from '../../actions/MemoryActions.js'
import memory from '../../reducers/memory.js'

function App(props) {

  console.log(props.memory.tiles)

  const arrayTiles = [...initialTiles, ...initialTiles]

  const shuffle = (arr) => {

    let currentIndex = arr.length,
      randomIndex,
      tempValue

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      tempValue = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = tempValue
    }

    return arr
  }

  return (
    <main className="main">
      <ul className="tiles">
        {props.memory.tiles.map((tile, index) =>
          <li key={index}>
            <Tile tileData={tile} flipTile={props.actions.flipTile} />
          </li>
        )}
        )
      </ul>
    </main>
  )
}
const mapStateToProps = (state) => {
  return {
    memory: state.memory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(MemoryActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
