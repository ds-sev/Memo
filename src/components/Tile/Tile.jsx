import './Tile.css'

function Tile({ tileData, flipTile }) {

  const tileImage = {
    background: `url(${tileData.url}) center no-repeat`
  }

  return (
    <div className="tile">
      <div className={`tile__container ${(tileData.flipped) && 'tile__container_flipped'}
                                       ${tileData.discovered && 'tile__container_hidden'}`}>
        <div style={tileImage} className="tile__back-side" />
        <div className="tile__front-side" onClick={() => flipTile(tileData.id)} />
      </div>
    </div>
  )
}

export default Tile
