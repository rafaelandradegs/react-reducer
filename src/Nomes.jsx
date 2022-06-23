import React from 'react'
import { v4 as uuid } from 'uuid'

export function Nomes({ nomes }) {
  return (
    <>
      {nomes.map(nome => (
        <p key={uuid()}>
          {nome} {uuid()}
        </p>
      ))}
    </>
  )
}
