import './App.css'
import Tile from './../Tile/Tile.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MemoryActions from './../../actions/MemoryActions.js'
import Header from './../Header/Header.jsx'
import Footer from './../Footer/Footer.jsx'

function App(props) {
  return (
    <div>
      <Header restart={props.actions.restart}
              revealed={props.memory.pairsRevealed}
              score={props.memory.round} />
      <main className="main">
        {props.memory.pairsRevealed < 8
          ? (
            <ul className="main__tiles-container">
              {props.memory.tiles.map((tile, index) =>
                <li key={index}>
                  <Tile index={index} tileData={tile} flipTile={props.actions.flipTile} />
                </li>
              )}
              )
            </ul>
          ) : (
            <button className='main__button-play-again' onClick={() => props.actions.restart()}>Play Again?</button>
          )
        }
      </main>
      <Footer />
    </div>
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
