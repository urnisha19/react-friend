import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone } = props.friend;
    const history= useHistory();
    const handleClick =(friendId)=>{
        history.push(`/friend/${friendId}`)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name:{name}</h1>
            <h3>phone:{phone}</h3>
            {/* <Link to ={`friend/${id}`}>Show detail of id {id}</Link>  */}
            <button onClick={()=>handleClick(id)}>See Details</button>
        </div>
    );
};

export default Friend;