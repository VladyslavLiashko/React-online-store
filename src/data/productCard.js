import AirPods from "../assets/img/PodsPro.png";
import appleWatch from "../assets/img/appWatch4.png";
import MacBook from "../assets/img/macBookPro.png";
import MIRobot from "../assets/img/XiaomiRobot.png";
import EZVIZ from "../assets/img/EZVIZ.png";
import MB2 from "../assets/img/MB2.png"
import MB3 from "../assets/img/MB3.png"
import MB4 from "../assets/img/MB4.png"


const ProductCard = [
    {
        id: 0,
        price: "300$",
        desc: "Apple Air Pods Pro",
        quantity: "1230 sales",
        button: "Buy now",
        img: AirPods,
        moreImg:{
            first: AirPods,
            second:AirPods,
            third:AirPods,
            fourth:AirPods
        },
        color: "Space Gray"
    },
    {
        id: 1,
        price: "1500$",
        desc: "Apple MacBook Pro",
        quantity: "230 sales",
        button: "Buy now",
        img: MacBook,
        moreImg:{
            first: MacBook,
            second:MB2,
            third:MB3,
            fourth:MB4
        },
        color: "Space Gray"
    },
    {
        id: 2,
        price: "800$",
        desc: "Apple Watch 4",
        quantity: "543 sales",
        button: "Buy now",
        img: appleWatch,
        moreImg:{
            first: appleWatch,
            second:appleWatch,
            third:appleWatch,
            fourth:appleWatch
        },
        color: "Space Gray"
    },
    {
        id: 3,
        price: "400$",
        desc: "Xiaomi MI Robot",
        quantity: "880 sales",
        button: "Buy now",
        img: MIRobot,
        moreImg:{
            first: MIRobot,
            second:MIRobot,
            third:MIRobot,
            fourth:MIRobot
        },
        color: "Space Gray"
    },
    {
        id: 4,
        price: "100$",
        desc: "EZVIZ C6N Smart Wi-Fi Camera 2MP 4mm (75°) ",
        quantity: "554 sales",
        button: "Buy now",
        img: EZVIZ,
        moreImg:{
            first: EZVIZ,
            second:EZVIZ,
            third:EZVIZ,
            fourth:EZVIZ
        },
        color: "Space Gray"
    }

]

export default ProductCard;