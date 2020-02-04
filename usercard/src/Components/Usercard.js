import React from 'react';

const Usercard = props => {
    console.log("This is props" ,props)
    return (
        <div>
            <img src={props.users.avatar_url} />
            <h2>{props.users.name}</h2>
        </div>
    )
}

export default Usercard;