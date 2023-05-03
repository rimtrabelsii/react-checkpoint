import React from 'react'
import Figure from 'react-bootstrap/Figure';

function About() {
  return (
    <Figure >
    <Figure.Image className='fig'
    
      width={400}
      height={300}
      alt="250x250"
      src="https://static.vecteezy.com/ti/vecteur-libre/p3/10925820-modele-de-conception-de-bienvenue-colore-gratuit-vectoriel.jpg"
    />
    <Figure.Caption>
      <h1 className='title'> WELCOME TO REEMA'S COMPANY </h1>
    </Figure.Caption>
  </Figure>
  )
}

export default About