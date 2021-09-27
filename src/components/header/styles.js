import styled from 'styled-components'

export const Container = styled.nav `
padding: 1rem 4rem;
@media screen and (max-width:925px){
padding: 1rem;
  
}
`
export const ContainerNav = styled.div `
width: 100%;
display: flex;
justify-content:space-between;
align-items: center;
`
export const NavbarNav = styled.ul `
/* max-width: 1080px; */
align-items: center;
display: flex;
list-style-type:none;
@media screen and (max-width:925px){
flex-wrap: wrap-reverse;
  
}
li {
      & + li {
        margin-left: 10px;
        @media screen and (max-width:925px){
margin-left: 0;
margin-top: 10px;
  display: none;
}
      }
      }

`