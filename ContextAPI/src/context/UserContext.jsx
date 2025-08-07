import React from 'react'
import { createContext } from 'react'
//const data = React.createContext
export const data =createContext()

function UserContext({children}) {
    // console.log(props);
    
    let username="DHRUVI LAD"
  return (
    <div>
        <data.Provider value={username}>
        {children}
        </data.Provider>
      {/* <h1>Hi!... I am UserContext</h1> */}
    </div>
  )
}

export default UserContext
