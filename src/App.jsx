import React from "react"
import Die from './Die'

export default function App() {

  //create random numbers array to be displayed in die div
  const dieElements = new Array(10).fill(0).map(die => {
      const randomNum = Math.floor(Math.random() * 6) + 1
      return <Die 
               value={randomNum}
             />
  })
      
  return (
          <main>
            <div className="title-container">
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze 
                it at its current value between rolls.</p>
            </div>  
            <div className="die-container">
              {dieElements}
            </div>
            <button>Roll</button>
          </main>
      )
}