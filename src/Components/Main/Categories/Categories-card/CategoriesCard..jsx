import React from "react";
import "./CategoriesCard.css"


const CategoriesCard = (props) =>{
    return(
        <div className="categories-card-wrapper">
            <img src={props.data.img} alt="" />
            <p>{props.data.name}</p>
        </div>
    )
}

export default CategoriesCard;