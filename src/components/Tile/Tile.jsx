import './Tile.css'

function Tile({ tileData, flipTile }) {

  return (
    <div role="presentation"
         className={`tile ${tileData.flipped && 'tile_opened'}`}
         onClick={() => flipTile(tileData.id)}>
      {tileData.meaning}
    </div>

  )
}

export default Tile
