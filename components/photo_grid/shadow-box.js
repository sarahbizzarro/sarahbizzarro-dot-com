import React, { useEffect } from 'react'

function ShadowBox(props) {

  const onKeyDown = (event) => {
    if (event.keyCode === 37) {
      props.onLeft()
    } else if (event.keyCode === 39) {
      props.onRight()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    };
  }, [onKeyDown]);

  const { artwork, onClose } = props
  return (
    <div className='blackbox' onClick={onClose}>
      <img className='blackbox-photo' src={artwork.path}></img>
    </div>
  )
}

export default ShadowBox