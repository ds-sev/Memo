import './App.css'
import Tile from './../Tile/Tile.jsx'
import { connect } from 'react-redux'
import Header from './../Header/Header.jsx'
import Footer from './../Footer/Footer.jsx'
import mapStateToProps from '../../redux/selectors/mapStateToProps.js'
import mapDispatchToProps from '../../redux/selectors/mapDispatchToProps.js'
import PropTypes from 'prop-types'

function App({ memory, actions }) {
  return (
    <>
      <Header restart={actions.restart}
              revealed={memory.pairsRevealed}
              score={memory.round} />
      <main className="main">
        {memory.pairsRevealed < 8
          ? (
            <ul className="main__tiles-container">
              {memory.tiles.map((tile, index) =>
                <li key={index}>
                  <Tile index={index}
                        tileData={tile}
                        flipTile={actions.flipTile}
                        revealed={memory.pairsRevealed} />
                </li>
              )}
              )
            </ul>
          ) : (
            <button className="main__button-play-again"
                    onClick={() => actions.restart()}>
              Play Again?
            </button>
          )
        }
      </main>
      <Footer />
    </>
  )
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp

App.propTypes = {
  actions: PropTypes.object.isRequired,
  memory: PropTypes.object.isRequired
}
