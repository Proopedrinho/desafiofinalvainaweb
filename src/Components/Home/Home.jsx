import React, { useState } from 'react';
import { Section, Div, Button, ImageContainer, Img1, Img2, Img3, Div1 } from "./style";

import copogrande1 from "../../assets/images/copogrande1.png"
import copogrande2 from "../../assets/images/copogrande2.png"
import copogrande3 from "../../assets/images/copogrande3.png"




import copopequeno1 from "./../../assets/images/copopequeno1.png"
import copopequeno2 from "./../../assets/images/copopequeno2.png"
import copopequeno3 from "./../../assets/images/copopequeno3.png"




export default function Home() {
 

  const [copoGrande, setCopoGrande] = useState(copogrande1);
 

  const handleCopoClick = (novoCopo) => {
   
    setCopoGrande(novoCopo);
    
  };
  

  return (
    <main>
      <Section> 
              
        <Div>     

          <h1>Mais que Café</h1>
          <h2>Isso é <span>Starbucks</span></h2>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <Button>SAIBA MAIS</Button>              
        </Div>
        
        
        <Div1>
          <Img1
            src={copopequeno1}
            alt="Copo pequeno 1"
            onClick={() => handleCopoClick(copogrande1)}
          />
          <Img2
  src={copopequeno2}
  alt="Copo pequeno 2"
  onClick={() => handleCopoClick(copogrande2)}
/>

          <Img3
          src={copopequeno3}
          alt="Copo pequeno 3"
          onClick={() => handleCopoClick(copogrande3)}
          />
          
        </Div1>
    </Section>

    <section>
    <ImageContainer>
          <img src={copoGrande} alt="Copo grande" />
        </ImageContainer>

    </section>

      
      
      
    </main>
  );
}
