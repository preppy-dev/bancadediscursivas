import styled from 'styled-components'

export const Container = styled.nav `
padding: 1rem 4rem;
`
export const ContainerNav = styled.div `
width: 100%;
display: flex;
justify-content:space-between;
`
export const NavbarNav = styled.ul `
max-width: 1080px;
display: flex;
list-style-type:none;
li {
      & + li {
        margin-left: 10px;
      }
      }

`