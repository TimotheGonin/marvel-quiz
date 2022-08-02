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

  const displayButton = button && (
    <React.Fragment>
      <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome">Connexion</button>
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
