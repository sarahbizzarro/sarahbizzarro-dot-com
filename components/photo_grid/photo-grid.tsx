import React, { useState } from "react"
import { Artwork } from "@types"
import ShadowBox from "./shadow-box"

type PhotoGridProps = {
  artworks: Artwork[]
}

const PhotoGrid = ({ artworks }: PhotoGridProps) => {
  const [selectedArtwork, setSelectedArtwork] = useState(-1)

  const selectArtwork = (id: number) => {
    setSelectedArtwork(id)
  }

  const nextArtworkLeft = () => {
    const n = artworks.length
    const left = (selectedArtwork - 1 + n) % n
    setSelectedArtwork(left)
  }

  const nextArtworkRight = () => {
    const right = (selectedArtwork + 1) % artworks.length
    setSelectedArtwork(right)
  }

  return (
    <div className="photo-grid">
      {artworks.map((photo, id) => (
        <img
          key={id}
          className="grid-photo"
          src={photo.path}
          onClick={() => selectArtwork(id)}
        />
      ))}
      {selectedArtwork > -1 && (
        <ShadowBox
          artwork={artworks[selectedArtwork]}
          onClose={() => selectArtwork(-1)}
          onLeft={nextArtworkLeft}
          onRight={nextArtworkRight}
        />
      )}
    </div>
  )
}

export default PhotoGrid
