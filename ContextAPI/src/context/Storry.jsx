import React from 'react'
import { createContext } from 'react'
export let Story = createContext()    

function Storry({children}) {
    let kahani = {
        name:"The Journey of My Life",
        storyline: "The journey of my life has been filled with challenges, lessons, and unforgettable moments that shaped who I am today."
    }
  return (
    <div>
       <Story.Provider value={kahani}> 
      {children}
      </Story.Provider>
    </div>
  )
}

export default Storry
