import React from "react";
import "./Footer.css";
import FB from "../../assets/img/Facebook.png";
import inst from "../../assets/img/Instagram.png";
import TG from "../../assets/img/Telegram.png";
import TikTok from "../../assets/img/TikTok.png";

import items from "../../data/categories";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-about-us">
                    <h1>{props.data.AboutUs.h1}</h1>
                    <p>{props.data.AboutUs.city}</p>
                    <p>{props.data.AboutUs.index}</p>
                    <p>{props.data.AboutUs.street}</p>
                </div>
                <div className="footer-categories">
                    <h1>Categories</h1>
                    <p>{items[0].name}</p>
                    <p>{items[1].name}</p>
                    <p>{items[2].name}</p>
                    <p>{items[3].name}</p>
                    <p>{items[4].name}</p>
                    <p>{items[5].name}</p>
                    <p>{items[6].name}</p>
                    <p>{items[7].name}</p>
                </div>
                <div className="footer-media">
                    <h1>{props.data.Media.h1}</h1>
                    <p>{props.data.Media.email}</p>
                    <p>{props.data.Media.phone}</p>
                    <p>{props.data.Media.socials}</p>
                    <div className="footer-media-img">
                        <img src={FB} alt="" />
                        <img src={inst} alt="" />
                        <img src={TG} alt="" />
                        <img src={TikTok} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-last">
                <p>{props.data.Last.name}</p>
                <p>{props.data.Last.author}</p>
            </div>
        </div>
    )
}

export default Footer;