import React from 'react'
import Card from './card'
import {Container} from './styles'

export default function CardList({data}) {
  return (
    <Container>
      {/* {
        data.map((curso=>(
          <Card key={curso.id} curso={curso}/>
        )))
      } */}
          <Card />
          <Card />
          <Card />
          <Card />

    </Container>
  )
}
