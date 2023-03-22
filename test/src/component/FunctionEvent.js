import React from 'react'

function FunctionEvent() {

    function clickEvent() {
        console.log("du har klickat")
    }

  return (
    <div>
        <button onClick={clickEvent}>enkel klick</button>
    </div>
  )
}

export default FunctionEvent
