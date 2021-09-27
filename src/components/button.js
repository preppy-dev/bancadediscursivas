import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link) `
background:${({primary})=>(primary ? '#652470' :
'')};
white-space:nowrap;
border:${({primary})=>(primary ? 'none' :
'2px solid #652470')};
border-radius:32px;
min-width:150px;
max-width:300px;
cursor:pointer;
text-decoration:none;
transition:center;
display:flex;
justify-content:center;
align-items:center;
padding: ${({big})=>(big ? '16px':'11px')};
color: ${({primary})=>(primary ? '#fff':'#652470')};
font-size: ${({big})=>(big ? '20px':'16px')};
&:hover {
  transform:translateY(-2px);
}

`;
export const ButtonBuy = styled.a `

border:2px solid #652470;
border-radius:32px;
min-width:150px;
max-width:300px;
cursor:pointer;
text-decoration:none;
transition:center;
display:flex;
justify-content:center;
align-items:center;
padding:.8rem 1.5rem;
margin: 1rem 0;
color: #652470;
font-size:14px;
&:hover {
  transform:translateY(-2px);
  color: #fff !important;
  border: none;
  background-color:#652470;
}

`;