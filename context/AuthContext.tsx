import  {createContext,ReactNode }  from "react";
import React, { useState,useContext } from "react";

const AuthContext = createContext<any>(undefined)

export const AuthProvider = ({children}:{children: ReactNode}) => {
const [isUser,setIsUser] = useState( false)

const login = ()=> setIsUser(true)
const logOut = ()=>{
    setIsUser(false)
}
    
 return (
    <AuthContext.Provider value ={{ isUser,logOut, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
 return useContext(AuthContext);
};
