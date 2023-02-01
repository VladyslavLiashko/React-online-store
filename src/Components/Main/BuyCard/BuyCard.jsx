import React from "react";
import { useParams } from "react-router-dom";
import "./BuyCard.css";
import items from "../../../data/productCard";
const BuyCard = () => {
    let { productId } = useParams();
    console.log(productId);

    let item = items[productId];
    console.log(item);
    return (
        <div className="buyCard">
            <div className="img-block">
                <div className="main-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="more-img">
                    <img src={item.moreImg.first} alt="" />
                    <img src={item.moreImg.second} alt="" />
                    <img src={item.moreImg.third} alt="" />
                    <img src={item.moreImg.fourth} alt="" />
                </div>
            </div>
            <div className="info-card-block">
                <h1>{item.desc}</h1>
                <p className="buy-card-color">{item.color}</p>
                <p className="buy-card-price">{item.price}</p>
                <div className="info-card-btns">
                    <button>Add to shopping card</button>
                    <button>Add to liked</button>
                </div>
            </div>
        </div>
    )
}
export default BuyCard;