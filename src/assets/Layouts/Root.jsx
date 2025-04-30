import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Navbar/Navbar';

const Root = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;