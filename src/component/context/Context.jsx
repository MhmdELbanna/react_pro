import { createContext, useState } from "react";

export const CuonterContext = createContext();

function CounContext({children}){
    const [countercon,setcountercon]=useState(0);
    return ( <CuonterContext.Provider value={{setcountercon,countercon}}>
        {children}
    </CuonterContext.Provider>);
}
export default CounContext;