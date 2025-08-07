import React from 'react'
import { useContext } from 'react'
import { Story } from './context/Storry'

function Card() {
   let data= useContext(Story)
//    console.log(data);
   
  return (
    <div>
        <h1>name: {data.name}</h1>
      <h1>storyline: {data.storyline}</h1>
    </div>
  )
}

export default Card
