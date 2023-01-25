import React from 'react'

export default function Die(props) {
    return (
        <div 
          className="die"
          id={props.id}
          onClick={props.onClick}  
        >
            <h2 className="die-value">{props.value}</h2>
        </div>
    )
}