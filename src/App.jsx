import React, { useState } from 'react'
import { Nomes } from './Nomes'
export function App() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])

  function guardarNome() {
    setNomes([...nomes, nome])
    setNome('')
  }
  return (
    <>
      <h1>React Unique ID</h1>
      <hr />
      <input
        type="text"
        value={nome}
        onChange={e => {
          setNome(e.target.value)
        }}
      />
      <button onClick={guardarNome}>Guardar Nome</button>
      <hr />
      <Nomes nomes={nomes} />
    </>
  )
}
