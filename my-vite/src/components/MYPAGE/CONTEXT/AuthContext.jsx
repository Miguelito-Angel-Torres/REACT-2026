import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null
const AuthProvider = ({children}) =>{

    const [auth, setauth] = useState(initialAuth)
    
    
    
    const handleAuth = (e) =>{
    if(auth){
        setauth(null)
    }else{
        setauth(true)
    }
    
  }

  const data = {auth,handleAuth}
    
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}



export {AuthProvider}
export default AuthContext