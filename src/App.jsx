import React, {useState, useEffect} from "react"
import Die from './Die'

export default function App() {

  const [dice, setDice] = useState(newDice())

  // function to generate array of random numbered dice
  function newDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDie())
    }
    return newDice
  }

  // helper function to generate one die element
  function generateDie() {
    const die = {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: crypto.randomUUID()
    }
    return die
  }

  // function when roll button is clicked
  function rollDice() {
    setDice(newDice)
  }

  // function when die is clicked; should toggle isHeld boolean and display green background if true
  function toggleDie() {
    console.log('test')
  }

/*   // not working
  function newFunc() {
    const emptyArr = new Array(10).fill({value: 0, isHeld: false})
    const newDDice = emptyArr.map(die => ({
      ...die,
      value: Math.ceil(Math.random() * 6)
    }))

    console.log(newDDice)
    return newDDice
  }

  newFunc(); */


  // array of dice elements to be rendered out 
  const diceElements = dice.map(die => {
    return <Die 
      id={die.id}
      key={die.id}
      value={die.value}
      onClick={toggleDie} 
    />}
  )
      
  return (
          <main>
            <div className="title-container">
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze 
                it at its current value between rolls.</p>
            </div>  
            <div className="die-container">
              {diceElements}
            </div>
            <button onClick={rollDice}>Roll</button>
          </main>
      )
}