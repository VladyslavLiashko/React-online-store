import React from 'react';
import "./Carusel.css";
import CaruselImg from "../../../assets/img/Carusel-image.png";
import CaruselSecond from "../../../assets/img/Carusel-image2.png";
import CaruselThird from "../../../assets/img/Carusel-image3.jpg";
import CaruselFourth from "../../../assets/img/Carusel5.jpg";
const Carusel = () => {
    return (
        <div className='carusel'>
            <div className="slider middle">
                <div className="slides">
                    <input type="radio" name="r" id="r1" checked />
                    <input type="radio" name="r" id="r2" />
                    <input type="radio" name="r" id="r3" />
                    <input type="radio" name="r" id="r4" />
                    <div class="slide s1">
                        <img src={CaruselImg} id="phito" alt="" srcset="" />
                    </div>
                    <div class="slide">
                        <img src={CaruselSecond} alt="" srcset="" />
                    </div>
                    <div class="slide">
                        <img src={CaruselThird} alt="" srcset="" />
                    </div>
                    <div class="slide">
                        <img src={CaruselFourth} alt="" srcset="" />
                    </div>
                </div>
                <div class="navigation">
                    <label for="r1" class="bar"></label>
                    <label for="r2" class="bar"></label>
                    <label for="r3" class="bar"></label>
                    <label for="r4" class="bar"></label>
                </div>
            </div>
        </div>
    )
}
export default Carusel;