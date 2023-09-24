import './Header.css'
import PropTypes from 'prop-types'

function Header({ restart, score, revealed }) {
  return (
    <header className="header">
      <span className="header__score">Total moves: {score - 1}</span>
      <span className="header__score">Pairs Revealed: {revealed}</span>
      <button className="header__button-restart" onClick={() => restart()}>new game</button>
    </header>
  )
}

export default Header

Header.propTypes = {
  restart: PropTypes.func,
  score: PropTypes.number,
  revealed: PropTypes.number
}
