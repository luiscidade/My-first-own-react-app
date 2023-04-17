import React from 'react';
import './UsersList.css';
import User from './User';

import Card from '../UI/Card/Card';

export default function UsersList(props){

    const deleteUserHandler = (userID) => {
        props.onUserDelete(userID);
    }; 
    
    if (props.items.length > 0){
        return(
            <Card>
                <ul className='users-list'>
                    {props.items.map(user => <User id={user.id} key={user.id} name={user.name} age={user.age} onDelete={deleteUserHandler}/>)}
                </ul>
            </Card>
        );
    } else {
        return(
            <h2 style={{textAlign: 'center'}}> Sem Usuários :/</h2>
        );
    }
}