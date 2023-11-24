import { useContext } from "react"
import "./buttn.css"
import { CuonterContext } from "../context/Context";

export function Btn(){
    const{ countercon , setcountercon} = useContext(CuonterContext);
    return (
        <>
        <button className="btn" onClick={()=>setcountercon(countercon+1)}>Add To Card</button>
        </>
    )
}