import React, { useState } from "react"
import ShadowBox from "./shadow-box"

function PhotoGrid(props) {
  const [selectedArtwork, setSelectedArtwork] = useState(-1)

  const selectArtwork = (id) => {
    setSelectedArtwork(id)
  }

  const nextArtworkLeft = () => {
    const n = props.artworks.length
    const left = (selectedArtwork - 1 + n) % n
    setSelectedArtwork(left)
  }

  const nextArtworkRight = () => {
    const right = (selectedArtwork + 1) % props.artworks.length
    setSelectedArtwork(right)
  }

  return (
    <div className="photo-grid">
      {props.artworks.map((photo, id) => (
        <img
          key={id}
          className="grid-photo"
          src={photo.path}
          onClick={() => selectArtwork(id)}
        />
      ))}
      {selectedArtwork > -1 && (
        <ShadowBox
          artwork={props.artworks[selectedArtwork]}
          onClose={() => selectArtwork(-1)}
          onLeft={nextArtworkLeft}
          onRight={nextArtworkRight}
        />
      )}
    </div>
  )
}

export default PhotoGrid
