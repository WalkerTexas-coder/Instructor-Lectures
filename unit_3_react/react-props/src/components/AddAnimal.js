import React from 'react'

const AddAnimal = (props) => {
  return (
    <button onClick={props.addAnimal}>
      Click to add an Animal
    </button>
  )
}

export default AddAnimal