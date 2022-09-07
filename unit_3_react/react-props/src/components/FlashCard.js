import React from 'react'

// nested components need a parameter of props
const FlashCard = (props) => {

  return (
    <div onClick={props.handleClick}>
      <p>This is a FlashCard</p>
      {/* <h2 >{props.animals[props.randomIndex]}</h2> */}
      <h2 >{props.animal}</h2>
      {/* <h2>{props.index}</h2> */}
    </div>

  )
}

export default FlashCard