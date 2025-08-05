// src/Components/context/UserContext.jsx

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = (username, password) => {
//     // Simulate login (you can add real logic here)
//     if (username && password) {
//       setIsAuthenticated(true);
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <UserContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser]= useState('zeel') ;

  return (
    <>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    </>
  )};