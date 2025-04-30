import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = () => {
    const {user}=use(AuthContext)

    return (
        <div  className='text-center mt-5 space-y-3'>
            <h1>{user.email}</h1>
            
        </div>
    );
};

export default Profile;