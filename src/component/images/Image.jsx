import "./Image.css"

export function Img(props) {
    return(
        <>
        <div className="img_div">
            <img src={props.Imgs} alt="" />
        </div>
        </>
    )
}