import React from "react";
import "./Menu.css";

import items from "../../data/categories";

const Menu = ({ active, setActive }) => {
    let item = items.map(pr => <a href={"categories/" + pr.id}><p>{pr.name}</p></a>)
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={()=> setActive(false)}>
            <h1>Catalog</h1>
            {item}
        </div>
    )
}

export default Menu;