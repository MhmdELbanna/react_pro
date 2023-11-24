import { useContext } from "react";
import "./navbar.css";
import { CuonterContext } from "../context/Context";

export function Nav() {
    // const{ countercon , setcountercon} = useContext(CuonterContext);
    const{countercon}= useContext(CuonterContext);

    return (
        <>
        <nav className="navbar">
            <h1>Logo</h1>
            <h2>card <span>{countercon}</span></h2>
        </nav>
        </>
    )
    
}