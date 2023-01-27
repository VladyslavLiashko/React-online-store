import React from "react";
import "./ProductCard.css";
import favorite from "../../../assets/img/favorite.png";
import shopping from "../../../assets/img/shopping.png";
import BuyCard from "../BuyCard/BuyCard";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate()
    let showItem = () =>{
        navigate(`/item/${props.data.id}`)
    }
    return (
        <div className="product-card-wrapper">
            <div className="fav-pro">
                <img src={favorite} alt="" />
            </div>
            <img src={props.data.img} alt="AirPods" srcset="" />
            <h1>{props.data.price}</h1>
            <p className="product-desc">{props.data.desc}</p>
            <p className="product-quantity">{props.data.quantity}</p>
            <div className="product-card-btns">
                <button onClick={showItem}>{props.data.button}</button>
                <img src={shopping} alt="" />
            </div>
        </div>
    )
}
export default ProductCard;