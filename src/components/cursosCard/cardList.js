import React, { useEffect, useState } from 'react'
import Card from './card'
import {Container} from './styles'


export default function CardList({scrollTo}) {
  const [state, setstate] = useState([])
  useEffect(() => {
    fetch('/concursos.json')
    .then(response=>response.json())
    .then(res=>setstate(res)) ;
  
  }, [])
  return (
    <Container>
      {
        state.length === 0 ? [] : state.map((curso=>(
          <Card key={curso.id} scrollTo={scrollTo} curso={curso}/>
        )))
      }
          {/* <Card scrollTo={scrollTo}/>
          <Card scrollTo={scrollTo}/>
          <Card scrollTo={scrollTo}/>
          <Card scrollTo={scrollTo}/> */}

    </Container>
  )
}
