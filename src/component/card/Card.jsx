import "./card.css";
import { Btn } from "../button/Button";
import { Img } from "../images/Image";
import { Info } from "../inf_card/Info";



export  function Card(){
    const products = [
        {
          id: 1,
          productName: "Ttich",
          Img:"/assest/Imgs/1.jpg",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          productName: "product",
          Img:"/assest/Imgs/2.jpg",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        },
        {
          id: 3,
          productName: "tich",
          Img:"/assest/Imgs/3.jpg",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        }
      ];

    return(
        <>
        <div className="card">
            {products.map((data)=>
                    <div className="cardItem">
                            <Img Imgs={data.Img}/>
                            <Info headen={data.productName} body={data.body} />
                            <Btn/>
                    </div>
            )}

        </div>
        </>
    )
}