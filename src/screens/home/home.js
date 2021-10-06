import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames';
import {Button} from '../../components/button';
import { NavLink } from 'react-router-dom';
import { HomeContainer,HeroContainer,FooterContainer,
  InclusContainer,InclusSection,ExplicationSection,CursosSection } from './style';
import CursosTextImg from '../../assets/cursostext.svg'
import Thecircle from '../../assets/circle.svg'
import { LionPlayer } from 'lion-player';
import 'lion-player/dist/lion-skin.min.css';
import CardList from '../../components/cursosCard/cardList';
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import { scroller } from 'react-scroll';
import "videojs-youtube/dist/Youtube"
import "video.js/dist/video"
//import videojs from "video.js";
import "video.js/dist/video-js.css";



const Home = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
   
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);
  
  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };
  
  
  const SOURCES = [
    {
      src: 'https://www.youtube.com/embed/4E7Exvk8BW0',
      type: 'video/youtube',
      registerTech:"youtube"
      /* youtube: { "iv_load_policy": 1 }, */
      /* techOrder: ["youtube"], */
      /* sourceOrder: [{ "type": "video/youtube",
       "src": "https://www.youtube.com/embed/4E7Exvk8BW0"}],
       */
      
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
  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
   /* youtube: { "iv_load_policy": 1 }, */
      techOrder: ["youtube"],
    sources: [{
      src: 'https://www.youtube.com/embed/4E7Exvk8BW0',
      type: 'video/youtube',
    }],
    
  }
  
  return (
    <HomeContainer>
      <HeroContainer>
     
      <div className="text-video">
      <div className="circle">
<img src={Thecircle} alt="" />
      </div>
      <div className="TextContainer">
        <img src={CursosTextImg} alt="" />
        <p>
        Aprenda a estudar para as discursivas com mais <br/>eficiência. 
        Não perca tempo com firulas.<br/> Elimine a possibilidade de reprovação mudando a sua forma de estudar as discursivas.
        </p>
        <Button to="#scroll"
        onClick={(event) => scrollTo(event, 'cursos')}
        >
        CONHEÇA OS CURSOS
        </Button>
        
      </div>
      <div data-vjs-player className="VideoContainer">
     {/*  <LionPlayer 
      sources={SOURCES}  
      controls="controls"
      techOrder={["youtube"]}
      autoplay={false}
      language={"pt-BR"}
      
      
      >
      </LionPlayer> */}
      
      <video 
      id="vid1"
      controls
      /* width="640" height="264" */
      class="video-js vjs-default-skin"
      responsive= {true}
      data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=4E7Exvk8BW0"}] }'
      className="video-js vjs-big-play-centered" />
    
    {/*   <video 
      
      controls
      autoplay={false}
      width="640" height="264"
      data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/4E7Exvk8BW0"}], "youtube": { "iv_load_policy": 1 } }'

      >
      </video> */}
      
      </div>
      </div>
      </HeroContainer>
      <CursosSection id="cursos">

      <CardList scrollTo={scrollTo}/>
      </CursosSection>

      <ExplicationSection className="">
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
        <div className="reverse">
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
      <InclusSection id="details" className="Inclus">
<h1>O que está incluso?</h1>
       <InclusContainer >
         <img src={Img4} alt="" />
         <div>
         <ul style={{listStyle: `url('https://metodo4ponto2.com.br/wp-content/uploads/2020/04/Icon-awesome-check.png')`}}>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
  
O aluno poderá submeter 4 textos para a correção da <br/>
banca. Podendo encaminhar para análise 01 (uma) discursiva a cada 7 dias.
</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
Será disponibilizado para o aluno um rol taxativo de 10 temas de discursivas, 
e acordo com seu cargo/área temática.

</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 'normal'}}>
Além disso, o aluno terá acesso a um curso bônus<br/> em texto, 
elaborado pela equipe Método 4.2, onde o <br/> aluno pode estudar 
as técnicas da arte de escrever <br/>um bom texto antes de enviar 
a sua primeira avaliação.
</p>
</li>
 	<li>
<p className="sessao_texto_menor cinza" style={{fontWeight: 400}}>
Galera, muito bom o conteúdo que vocês já mandaram <br/>até aqui!!! 
Para completar os insumos para nossa planejamento inicial,<br/> falta 
o seguinte : 10 temas de conteúdos técnicos sobre<br/> o produto de 
vocês (conteúdos técnicos que podem ser entregues gratuitamente
 e que servem com porta de entrada para o mundo do produto principal
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
