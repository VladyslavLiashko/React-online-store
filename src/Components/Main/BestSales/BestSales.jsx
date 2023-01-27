import React from "react";
import "./BestSales.css";

import items from "../../../data/productCard";

import ProductCard from "../ProductCard/ProductCard";

const BestSales = (props) =>{
    let item =items.map(pr => <ProductCard data ={pr}/>)
    return(
        <section className="best-sales">
            <h1>{props.data.h1}</h1>
            <div className="best-sales-wrapper">
                {item}
            </div>
            <button>{props.data.button}</button>
        </section>
    )
}

export default BestSales;