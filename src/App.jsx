import React, { useReducer } from 'react'

export function App() {
  const [state, dispacth] = useReducer(reducer, {
    player1: 0,
    player2: 0
  })

  function reducer(state, action) {
    switch (action.type) {
      case 'SCORE1':
        return {
          player1: state.player1 + 1,
          player2: state.player2
        }
      case 'SCORE2':
        return {
          player1: state.player1,
          player2: state.player2 + 1
        }

      case 'RESETAR':
        return {
          player1: 0,
          player2: 0
        }

      default:
        return state
    }
  }
  return (
    <>
      <h1>React Hooks - useReducer</h1>
      <hr />
      <p>Player 1: {state.player1}</p>
      <p>Player 2: {state.player2}</p>
      <button
        onClick={() => {
          dispacth({ type: 'SCORE1' })
        }}
      >
        Pontos 1
      </button>
      <button
        onClick={() => {
          dispacth({ type: 'SCORE2' })
        }}
      >
        Pontos 2
      </button>
      <button
        onClick={() => {
          dispacth({ type: 'RESETAR' })
        }}
      >
        Resetar score
      </button>
    </>
  )
}
