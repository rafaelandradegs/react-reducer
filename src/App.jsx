import React, { useReducer } from 'react'

export function App() {
  //Reducer
  const [state, dispatch] = useReducer(reducer, {
    valor: 1000,
    mostrar: true
  })

  //funcao reducer
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENTAR':
        return { valor: state.valor + 1, mostrar: state.mostrar }

      case 'VISIBILIDADE':
        return { valor: state.valor, mostrar: !state.mostrar }

      default:
        return state
    }
  }

  return (
    <>
      <h1>React Hooks - useReducer</h1>
      <hr />
      <p>Valor: {state.valor}</p>
      {state.mostrar && <p>Objeto booleano</p>}
      <hr />
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENTAR' })
        }}
      >
        Contador
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'VISIBILIDADE' })
        }}
      >
        Visivel / Ocultar
      </button>
    </>
  )
}
