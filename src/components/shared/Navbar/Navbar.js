import React from 'react';
import Header from '../Header/Header';

const Navbar = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-black p-5 text-white'>
                <h1>Navbar</h1>
            </div>
        </div>
    );
};

export default Navbar;