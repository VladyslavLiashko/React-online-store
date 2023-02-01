import React from "react";
import "./Categories.css";
import CategoriesCard from "./Categories-card/CategoriesCard.";

import items from "../../../data/categories";

const Categories = (props) => {
    let item =items.map(pr => <CategoriesCard data ={pr}/>)
    return (
        <div className="categories-main">
            <h1>{props.name.h1}</h1>
            <div className="cards-wrapper" >
                {item}
            </div>
            <button>{props.name.button}</button>
        </div>
    )
}

export default Categories;