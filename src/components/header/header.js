import React, { useRef, useState } from 'react'
import Headroom from 'react-headroom';
import { scroller } from 'react-scroll';
import { Button } from '../button';
import { Container } from './styles';
import { ContainerNav,NavbarNav } from './styles';
import Logo from '../../assets/logos/logo.svg'


const Header = ()=> {
  
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const refSectionFooter = useRef(null);
  

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
  
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
   
<Container class="">
<ContainerNav class="container">
  <a href="/" class="navbar-brand">
  <img src={Logo} alt="" width="200" />
  </a>
  <NavbarNav className="navbar-nav">
  <li className="nav-item text-center">
      <Button
      
        href={"/"}
      >
       Cadastrar
      </Button>
    </li>
  <li className="nav-item text-center">
      <Button
      primary
        href={"/"}
      >
        Entrar
      </Button>
    </li>

  </NavbarNav>
</ContainerNav>
</Container>
    
  )
}

export default Header
