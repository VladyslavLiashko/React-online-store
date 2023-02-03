import React from "react";
import Carusel from "./Carusel/Carusel";
import Categories from "./Categories/Categories";
import BestSales from "./BestSales/BestSales";
import "./Main.css"

const Main = (props) =>{
    return(
        <div className="main">
            {/* <Carusel/> */}
            <Categories name ={props.data.Categories} />
            <BestSales data ={props.data.BestSales} name = {props.data.ProductCard}/>
        </div>
    )
}

export default Main;