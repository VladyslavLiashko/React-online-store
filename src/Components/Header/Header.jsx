import React, { useState } from 'react';
import "./Header.css";
import Logo from "../../assets/img/Header-logo.png";
import Heart from "../../assets/img/heart-btn.png";
import Shop from "../../assets/img/shop-btn.png";
import Hamburger from "../../assets/img/hamburger.png";
import Menu from '../Menu/Menu';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <form action="#">
                <input type="text" id='text' placeholder="Search.." />
                <input type="submit" id='submit' value="GO" />
            </form>
            <div className="header-btns-wrapper">
                <div className="header-btns">
                    <img src={Heart} alt="heart" />
                </div>
                <div className="header-btns">
                    <img src={Shop} alt="shop" />
                </div>
            </div>
            <button onClick={()=> setMenuActive(!menuActive)}><img src={Hamburger} alt="catalog" /></button>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    )
}

export default Header;