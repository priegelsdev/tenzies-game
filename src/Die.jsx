import React from 'react'

export default function Die(props) {
  const styles={backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"}

  return (
      <div 
        className="die"
        style={styles}
        id={props.id}
        onClick={props.onClick}  
      >
          <h2 className="die-value">{props.value}</h2>
      </div>
  )
}