import React from 'react';
import './User.css';

export default function User(props){

    const userDeleteHandler = () => {
        props.onDelete(props.id);
    };

    return(
        <li className='user' onClick={userDeleteHandler}>
            {props.name} ({props.age} anos)
        </li>
    );

}