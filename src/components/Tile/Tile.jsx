import './Tile.css'
import { useEffect, useState } from 'react'

function Tile({ tileData, flipTile, revealed }) {

  const [isPairRevealed, setIsPairRevealed] = useState(false)

  useEffect(() => {
    if (tileData.discovered && revealed > 0) {
      setTimeout(() => setIsPairRevealed(true), 800)
    }
    else setIsPairRevealed(false)
  }, [revealed])

  const tileImage = {
    background: `url(${tileData.url}) center no-repeat`
  }

  return (
    <div className="tile">
      <div className={`tile__container ${tileData.flipped && 'tile__container_flipped'}
                                       ${isPairRevealed && 'tile__container_hidden'}`}>
        <div style={tileImage} className="tile__back-side" />
        <div className="tile__front-side" onClick={() => flipTile(tileData.id)} />
      </div>
    </div>
  )
}

export default Tile
