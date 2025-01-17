import React, { createContext } from 'react'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    // all the objects which declared in the context must be created into a single object
    const contextValue = {

    }
    return (
       <StoreContext.Provider value={contextValue}>
           {props.children}
       </StoreContext.Provider>
    )
}
export default StoreContextProvider