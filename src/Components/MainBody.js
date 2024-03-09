import Carousel from "./Carousel";
import ListCar from "./ListCar";
import Reason from "./Reason";
import News from './News';
import { Link } from "react-router-dom";

function MainBody() {
    return ( 
        <>
            <Carousel/>
            <ListCar/>
            <Reason/>
            <News/>
        </>
     );
}

export default MainBody;