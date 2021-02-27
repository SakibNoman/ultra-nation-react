import React from 'react';
import './User.css'

const User = (props) => {
    const { firstName, lastName, picture, email, phone, salary } = props.users;
    return (
        <div className="main" >
            <div className="user-card" >
                <div className="img-box" >
                    <img src={picture} alt="" />
                </div>
                <div className="info-box" >
                    <p>{firstName + " " + lastName}</p>
                    <p><small>Salary: ${salary}</small></p>
                    <><small>E-mail: {email}</small></>
                    <p> <small>Phone: {phone}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default User;