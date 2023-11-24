import "./info.css";

export function Info(props) {
    return(
        <>
        <div className="heading_info">
            <h2>{props.headen}</h2>
            <p>{props.body}</p>
        </div>
        </>
    )
    
}