import React, { useState } from 'react'
import Context from './Context'

const State = (props) => {
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    const [book,setBook] = useState([])
  return (
    <Context.Provider value={{isAuth,setIsAuth ,user,setUser,book,setBook}}>
        {props.children}
    </Context.Provider>
  )
}

export default State