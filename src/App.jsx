import React, {useState, useEffect} from "react"
import Die from './Die'
import Confetti from 'react-confetti'

export default function App() {

  // states for dice and for winning the game
  const [dice, setDice] = useState(newDice())
  const [tenzies, setTenzies] = useState(false)

  // effect for when game is won 
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const sameValues = dice.every(die => die.value === firstValue)

    if (allHeld && sameValues) {
      setTenzies(true)
    }
  }, [dice])

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
    if (!tenzies) {
      setDice(prevDice => {
        return prevDice.map(prevDie => {
          return prevDie.isHeld ?
            prevDie :
            generateDie(); 
        })
      })
    } else {
      setTenzies(false)
      setDice(newDice())
    }
  }

  // function when die is clicked; should toggle isHeld boolean and display green background if true
  function toggleDie(id) {
    setDice(prevDice => {
      return prevDice.map(prevDie => {
        return prevDie.id === id ? 
          {...prevDie, isHeld: !prevDie.isHeld} : 
          prevDie
      })
    })
  }

  // array of dice elements to be rendered out 
  const diceElements = dice.map(die => {
    return <Die 
      id={die.id}
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      onClick={() => toggleDie(die.id)} 
    />}
  )
      
  return (
          <main>
            {tenzies && <Confetti />}
            <div className="title-container">
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze 
                it at its current value between rolls.</p>
            </div>  
            <div className="die-container">
              {diceElements}
            </div>
            <button onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
          </main>
      )
}