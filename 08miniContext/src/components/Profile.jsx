import React, {useContext, useState} from 'react';
import USerContext from '../context/userContext';

function Profile() {3
    const {user} = useContext(USerContext);

    if (!user) return <div> plaese Login </div>

    return <div>Welcome {user.username}</div>
    
}

export default Profile