import React from 'react'
import "./style.css"
import Square from './Square'

function TicTacToe() {
  return (
    <>
    <div className='board-row'>
     <Square value="1"/>
     <Square value="2"/>
     <Square value="3"/>
    </div>
    <div className='board-row'>
     <Square value="4"/>
     <Square value="5"/>
     <Square value="6"/>
    </div>

    <div className='board-row'>
     <Square value="7"/>
     <Square value="8"/>
     <Square value="9"/>
    </div>
   

    </>
  )
}

export default TicTacToe
