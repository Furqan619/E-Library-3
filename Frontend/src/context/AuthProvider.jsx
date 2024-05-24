import React, { createContext, useContext, useState } from "react";

// We are exporting "createContext" and "AuthProvider" function so that we can use in other modules
export const AuthContext = createContext();

// We have added children to include all child components like: navbar.js ,app.js etc.
// Sabhi chidren ko ham AuthProvider me use kerpaye isiliye ham children ko pass kerrahe h.
export default function AuthProvider({ children }) {
    

   // Now the user which is in localStorage  we have to bring it here!
  const localStorageUser = localStorage.getItem("Users");

  // Now we will manage our 'State', if the user is from LocalStorage then parse it otherwise keep undefined.
  const [authUser, setAuthUser] = useState(
    localStorageUser ? JSON.parse(localStorageUser) : undefined
  );
  return (
    // Below Authentication is very important to provide security to the Registered user.
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// At the end we are exporting "useContext" to use registered user globally in our application.
export const useAuth = () => useContext(AuthContext);
