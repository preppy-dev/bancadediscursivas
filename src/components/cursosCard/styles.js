import styled  from 'styled-components';

export const Container = styled.ul `
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
@media screen and (max-width:925px){
  grid-template-columns: 1fr;
  
}
grid-gap: 1rem;
list-style-type: none;
padding: 10px;

li {
  
-webkit-box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
-moz-box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
box-shadow: 2px 6px 10px 0px rgba(0,0,0,0.10);
border-radius: 16px;
background-color: #fff;


&:hover {
  transform:translateY(-4px);
}
  .img{
  width: 100%;
  img{
    width: 100%;
  }
  }
  .text{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      margin-bottom: 1rem;
      text-align:center;
      font-size: 15px;
    }
    a {
      color: #000000;
      & + a {
        margin-top: 1rem;
        text-decoration: none;
      }
      }
  }
}
`