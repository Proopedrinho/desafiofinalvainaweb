import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;

`
export const StyleLink = styled(Link)`


  text-decoration: none;
  color: #1e3932;
  
   &:hover{
       color: palevioletred;
   }
`;

export const Ul = styled.ul`

display: flex;
width: 30vw;
justify-content: space-around;
list-style: none;
font-family: "Poppins", sans-serif;
color: ##1E3932


`
export const Img = styled.img`
display: flex;
padding: 10px 0 10px 90px


`

