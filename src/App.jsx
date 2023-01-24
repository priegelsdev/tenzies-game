import React, {useState, useEffect} from "react"
import Die from './Die'

export default function App() {

  const [dice, setDice] = useState(generateDice())

  // function to generate array of random numbered dice
  function generateDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(generateDice)
  }

  // not working
  function newFunc() {
    const emptyArr = new Array(10).fill({value: 0, isHeld: false})
    const newDDice = emptyArr.map(die => ({
      ...die,
      value: Math.ceil(Math.random() * 6)
    }))

    console.log(newDDice)
    return newDDice
  }

  newFunc();


  // array of dice elements to be rendered out 
  const diceElements = dice.map(die => <Die value={die} />)
      
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