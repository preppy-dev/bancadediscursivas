import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonBuy } from '../button'
import Cursoimage from '../../assets/cursoimage.png'


function Card({curso,scrollTo}) {
  return (
    <>
    <li>
      <div className="img">
      <img src={curso.img_url} alt="" />
      </div>
      <div className="text">
      <h2>
      {curso.valor}
      </h2>
      <ButtonBuy target="_blank" rel="noopener noreferrer" href={curso.link}>
      APROVEITE A OFERTA
      </ButtonBuy>
      <Link to="#scroll"
      onClick={(event) => scrollTo(event, 'details')}
      >
      Confira Os Detalhes
      </Link>
      </div>
    </li>
    {/* <li>
      <div className="img">
      <img src={Cursoimage} alt="" />
      </div>
      <div className="text">
      <h2>
      De R$2091,00 por até 12x de R$ 165,34
      </h2>
      <ButtonBuy target="_blank" rel="noopener noreferrer" href="https://app.vindi.com.br/customer/pages/1e604255-e79f-47fd-8864-f33bf33ac621/checkout_products/new">
      APROVEITE A OFERTA
      </ButtonBuy>
      <Link to="#scroll"
      onClick={(event) => scrollTo(event, 'details')}
      >
      Confira Os Detalhes
      </Link>
      </div>
    </li> */}
    </>
  )
}

export default Card
