import styled  from 'styled-components';

export const HomeContainer = styled.div `
 overflow: hidden;
`
export const HeroContainer = styled.div `
width: 100%;
position: relative;
margin: 4rem 0;
.circle{
  position: absolute;
  display: none;
  left: -9rem;
  img{
    width: 250px;
  }
}
.video-js{
  width: 500px;
    height:260px ;
    border: 2px solid #fff;
    -webkit-box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
-moz-box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
border-radius: 16px;
@media screen and (max-width:925px){
   
  width: 430px;
    height:250px ;
}
  }
  

.text-video{

  display: grid;
  grid-template-columns: 55% 45%;
  grid-gap:2rem;
  max-width: 1080px;
  padding: 10px;
  margin:0 auto;
  @media screen and (max-width:925px){
    display: flex;
    flex-direction: column-reverse;
  width: 100%;
  
}
  
}
.VideoContainer{
  width: 100%;
  padding: 1px;
 
}
.TextContainer{
  z-index:999;
  width: 100%;
  padding-right:1rem;
  img{
    width: 78%;
  }
  p{
    z-index:999;
    padding: 1rem 0 2rem 0;
    width: 80%;
    color: #5a5d61;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
  }
}
`
export const CursosSection = styled.div `
margin:20px auto 40px auto;
max-width: 820px;
@media screen and (max-width:925px){
  width: 100%;
  margin: 0;
  }

`
export const ExplicationSection = styled.section `
max-width:1000px ;
margin: 3rem auto;
padding: 10px;
h1{
  text-align:center;
  color: #652470;
  font-size: 2rem;
}
.reverse{
 
 @media screen and (max-width:925px){
   
 flex-wrap: wrap-reverse;
 div{
   margin-top: 1.5rem;
 }
}

 }
 .explication{
 
 @media screen and (max-width:925px){
 flex-wrap: wrap;
 text-align:center;
 div{
   margin-top: 1.5rem;
 }
}
 }
.explication,.reverse{
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width:925px){
    margin-top: 2.9rem;

  
}



  align-items: center;
  div {
  max-width: 400px;

  }
  .text-left{
    text-align:right;
    @media screen and (max-width:925px){
  flex-wrap: wrap-reverse;
  text-align:center;
  
}
  }
  img{
  max-width: 400px;
}


}
`
export const InclusSection = styled.section `
max-width:1000px ;
margin: 3rem auto;
padding: 10px;
h1{
  text-align:center;
  color: #652470;
}
@media screen and (max-width:925px){
   
   width: 100%;
   margin: 2rem ;
   }

`
export const InclusContainer = styled.div `
margin-top: 2rem;
display: grid;
grid-template-columns: repeat(2,1fr);

@media screen and (max-width:925px){  
  grid-template-columns: 1fr;
  
  }
align-items: center;
grid-gap: 1rem;
img{
  max-width: 400px;
}
ul{
  @media screen and (max-width:925px){
   
   width: 100%;
   li{
     font-size: 16px;
   }
   }

  li {
    color: #212223;
    margin: 2rem 0;
      & + li {
      }
      }
}
`

export const FooterContainer = styled.footer `
padding: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
background-color: #652470;
p{
  text-align:center;
  color: #fff;
}
`