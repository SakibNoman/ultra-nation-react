import React from 'react';
import './Viewimage.css'

const Viewimage = (props) => {
    console.log(props);
    return (

        <img className="image" src={props.image.picture} alt="Hi" />

    );
};

export default Viewimage;