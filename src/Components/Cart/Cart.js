import React from 'react';
import Viewimage from '../Viewimage/Viewimage'

const Cart = (props) => {
    let salary = 0;
    props.added.map(each => {
        salary = salary + parseInt(each.salary);
    })

    return (
        <div >
            <h4>Friends Overview</h4>
            <p>Total added : {props.added.length}</p>
            <p>Total salary: {salary} </p>
            <div>
                {
                    props.added.map(each => <Viewimage image={each} ></Viewimage>)
                }
            </div>
        </div>
    );
};

export default Cart;