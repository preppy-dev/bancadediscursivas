import React, { useRef, useState } from 'react'
import classnames from 'classnames';
import {Button} from '../../components/button';
import { NavLink } from 'react-router-dom';
import { HomeContainer,HeroContainer,FooterContainer,
  InclusContainer,InclusSection,ExplicationSection,CursosSection } from './style';
import CursosTextImg from '../../assets/cursostext.svg'
import { LionPlayer } from 'lion-player';
import 'lion-player/dist/lion-skin.min.css';
import CardList from '../../components/cursosCard/cardList';
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'




const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  
  const SOURCES = [
    {
      src: 'https://www.youtube.com/embed/4E7Exvk8BW0',
      type: 'video/youtube',
      youtube: { "iv_load_policy": 1 },
      techOrder: ["youtube"],
      
    }
  ];
  

/*   const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };
 */
  
  return (
    <HomeContainer>
      <HeroContainer>
      <div>

      </div>
      <div className="text-video">
      <div className="TextContainer">
        <img src={CursosTextImg} alt="" />
        <p>
        Aprenda a estudar para as discursivas com mais <br/>eficiência. 
        Não perca tempo com firulas.<br/> Elimine a possibilidade de reprovação mudando a sua forma de estudar as discursivas.
        </p>
        <Button to="#cursos">
        CONHEÇA OS CURSOS
        </Button>
        
      </div>
      <div className="VideoContainer">
      <LionPlayer sources={SOURCES}  controls="controls" autoplay={false} 
  
      />
      
      </div>
      </div>
      </HeroContainer>
      <CursosSection id="cursos">

      <CardList/>
      </CursosSection>

      <ExplicationSection className="explication">
        <h1>
        Prepara-se com a banca de <br/>discursivas
        </h1>
        <div className="explication">
          <img src={Img1} alt="" />
          <div>
          Os professores são especialistas em preparação para 
          discursivas. Conhecemos  a forma de avaliação das bancas,
           e os erros e acertos dos candidatos. 

          </div>
        </div>
        <div className="explication">
          <div className="text-left">
          O seu texto será submetido a uma Banca de Discursivas 
          e passará por mais de uma avaliação. Dessa forma, os 
          critérios utilizados para corrigir o seu texto serão 
          minuciosamente controlados, o que fará com que você 
          tenha uma correção completa do seu texto.


          </div>
          <img src={Img2} alt="" />
        </div>
        <div className="explication">
          <img src={Img3} alt="" />
          <div >
          Tenha acesso a uma plataforma de análise comparativa do 
          seu desempenho quantitativo e qualitativo. 

          </div>
        </div>

      </ExplicationSection>
      <InclusSection className="Inclus">
<h1>O que está incluso?</h1>
       <InclusContainer >
         <img src={Img4} alt="" />
         <div>
         <ul style={{listStyle: `url('https://metodo4ponto2.com.br/wp-content/uploads/2020/04/Icon-awesome-check.png')`}}>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
  
O aluno poderá submeter 4 textos para a correção da <br/>banca. Podendo encaminhar para análise 01 (uma) discursiva a cada 7 dias.
</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
Será disponibilizado para o aluno um rol taxativo de 10 temas de discursivas, e acordo com seu cargo/área temática.

</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
Além disso, o aluno terá acesso a um curso bônus em texto, elaborado pela equipe Método 4.2, onde o aluno pode estudar as técnicas da arte de escrever um bom texto antes de enviar a sua primeira avaliação.
</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 400}}>
Galera, muito bom o conteúdo que vocês já mandaram até aqui!!! Para completar os insumos para nossa planejamento inicial, falta o seguinte : 10 temas de conteúdos técnicos sobre o produto de vocês (conteúdos técnicos que podem ser entregues gratuitamente e que servem com porta de entrada para o mundo do produto principal
</p>
</li>
</ul>
         </div>
       </InclusContainer >
      </InclusSection>

      <FooterContainer>
        <p>2021 Banca de DiscursivaTodos os direitos reservados</p>
      </FooterContainer>
    
      
    </HomeContainer>
  )
}

export default Home
