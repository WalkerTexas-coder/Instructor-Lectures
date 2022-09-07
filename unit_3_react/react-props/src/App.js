import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FlashCard from './components/FlashCard'

const App = () => {
  const [animals, setAnimals] = useState(["Cheetah", "Walrus", "Giraffe", "Panda", "Opossum", "Seal"])
  const [randomIndex, setRandomIndex] = useState(0)


  const handleClick = () => {
    // create a random number based on the length of the animals array
    let randomNumber = Math.floor(Math.random() * animals.length)
    setRandomIndex(randomNumber)
  }

  const addAnimal = () => {
    const newAnimal = prompt()
    // console.log(newAnimal);
    setAnimals([...animals, newAnimal])
  }

  return (
    <>
      <h1 className="red">Animal Flash card application</h1>

      {animals.map((value) => {
        return <FlashCard animal={value} index={randomIndex} handleClick={handleClick} />
      })}

      {/* <FlashCard animals={animals} index={randomIndex} handleClick={handleClick} /> */}

      <button onClick={addAnimal}> Get ya a new animal</button>

    </>
  )
}
export default App
