import React from 'react'
import { Link } from 'react-router-dom'
import TicTacToe from '../components/TicTacToe/TicTacToe'

function Projects() {
  return (
    <div>
      <Link to="/projects/tictactoe">TicTacToe</Link>
    </div>
  )
}

export default Projects
