import { Link } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'

const Landing = () => {
  const refWolverine = useRef(null)
  const [button, setButton] = useState(false)

  useEffect(() => {
    refWolverine.current.classList.add('startingImg')
    setTimeout(() => {
      refWolverine.current.classList.remove('startingImg')
      setButton(true)
    }, 1000)
  }, [])

  const setLeftImg = () => {
    refWolverine.current.classList.add('leftImg')
  }
  const setRightImg = () => {
    refWolverine.current.classList.add('rightImg')
  }
  const clearImg = () => {
    if (refWolverine.current.classList.contains('leftImg')) {
      refWolverine.current.classList.remove('leftImg')
    } else if (refWolverine.current.classList.contains('rightImg')) {
      refWolverine.current.classList.remove('rightImg')
    }
  }

  const displayButton = button && (
    <React.Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
        <Link to="/signup" className="btn-welcome">
          Inscription
        </Link>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
        <Link to="/login" className="btn-welcome">
          Connexion
        </Link>
      </div>
    </React.Fragment>
  )

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayButton}
    </main>
  )
}

export default Landing
