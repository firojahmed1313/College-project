import React, { useState } from 'react'
import Context from './Context'

const State = (props) => {
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    const [book,setBook] = useState([])
    const [state, setState] = useState({
      provider: null,
      signer: null,
      contract: null,
    });
    const [account, setAccount] = useState("None");
    
  return (
    <Context.Provider value={{isAuth,setIsAuth ,user,setUser,book,setBook,state,setState,account,setAccount}}>
        {props.children}
    </Context.Provider>
  )
}

export default State