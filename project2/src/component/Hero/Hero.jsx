import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import bmw from "../../assets/bmw.jpg"
import rr from "../../assets/rangrover.jpg"
import lamb from "../../assets/lamborgini.jpg"


function Hero() {
  return (
    <div className='hero'>
      <Card name="BMW" price="Rs 1.9cr" imageUrl={bmw}/>
      <Card name="Range Rover" price="Rs 2.9cr" imageUrl={rr}/>
      <Card name="Lamborghini" price="Rs 3.9cr" imageUrl={lamb}/>
    </div>
  )
}

export default Hero
