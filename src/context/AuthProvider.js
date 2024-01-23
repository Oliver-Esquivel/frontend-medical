import React, { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAutenticated , setIsAutenticated] = useState(false)
      
    return(
        <AuthContext.Provider value={{
            isAutenticated, setIsAutenticated, 
        }}>
            {children}
        </AuthContext.Provider>
    )
}