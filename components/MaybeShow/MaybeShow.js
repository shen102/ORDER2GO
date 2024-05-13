import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const MaybeSlider = ({ children }) => {

const location = useLocation();

const [showslider, setshowslider] = useState(false)

useEffect(() => {
    console.log('this is location', location)
    if(location.pathname==='/about'){
        setshowslider(true)
    } else{
        setshowslider(false)
    }
}, [location])

return(
    <div>{showslider && children}</div>
)
}

export default MaybeSlider