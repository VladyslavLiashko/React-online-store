import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesCard.css"


const CategoriesCard = (props) =>{
    const navigate = useNavigate()
    let allItems = () =>{
        navigate(`/categories/${props.data.id}`)
    }
    return(
        <div className="categories-card-wrapper" onClick={allItems}>
            <img src={props.data.img} alt="" />
            <p>{props.data.name}</p>
        </div>
    )
}

export default CategoriesCard;