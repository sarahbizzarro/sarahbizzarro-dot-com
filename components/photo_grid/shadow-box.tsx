import React, { useEffect } from "react"
import { Artwork } from "@types"

type ShadowBoxProps = {
  artwork: Artwork
  onClose: () => void
  onLeft: () => void
  onRight: () => void
}

const ShadowBox = ({ artwork, onClose, onLeft, onRight }: ShadowBoxProps) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      onLeft()
    } else if (event.key === "ArrowRight") {
      onRight()
    } else if (event.key === "Escape") {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [onKeyDown])

  return (
    <div className="blackbox" onClick={onClose}>
      <img className="blackbox-photo" src={artwork.path}></img>
    </div>
  )
}

export default ShadowBox
