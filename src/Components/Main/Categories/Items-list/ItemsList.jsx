import React from "react";
import "./ItemsList.css";
import { useParams } from "react-router-dom";
import items from "../../../../data/items";
import ProductCard from "../../ProductCard/ProductCard";

const ItemsList = () =>{
    let {itemId} = useParams();
    let item = items[itemId];
    let itemsList = item.map(pr => <ProductCard data ={pr}/>)
    return(
        <div className="items-list">
            <h1>{item.desc}</h1>
            <div className="item-list-wrapper">
                {itemsList}
            </div>
        </div>
    )
}

export default ItemsList;