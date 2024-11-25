import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-around;
  height: 80vh;
  color: #1e3932;
  font-family: "Poppins", serif;
  width: 40vw; 
  margin-left: 150px; 
  
 
  
`;

export const Div = styled.div`
 

  h1 {
    font-size: 4rem; 
    font-weight: 400;  
    color: #1e3932;
    margin-bottom: 1rem; 
  }

  h2 {
    font-size: 2.5rem; 
    font-weight: 400;
    color: #000000cc; 
    display: inline; 
  }

  span {
    color: #037143; 
    font-size: 5rem;
    font-weight: 700; 
    display: inline; 
    margin-left: 0.5rem;
  }

  p {
    color: #000000cc;
    font-size: 1.3rem; 
    line-height: 1.5; 
    margin-top: 1rem; 
  }

`;

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #025c36;
  }
`;

export const Img = styled.img`
  display: flex;
  padding: 2.5vw 0 0 0;
  height: 100%;
`;

export const ImageContainer = styled.div`
  img {
    position: fixed;
    width: 27%;
    right: 7%;
    top: 32%;
  }
  border: blue solid;
`;

export const Img1 = styled.img`
width: 80px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2); 
  }
`;

export const Img2 = styled(Img1)``; 

export const Img3 = styled(Img1)``; 

export const Div1 = styled.div`
  display: flex;
  justify-content: center; 
  
  gap: 2rem; 
  margin-top: 2rem; 
  width: 100%; 
`;