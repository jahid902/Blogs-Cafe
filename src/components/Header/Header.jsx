import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between px-8 md:px-14 pt-3'>
            <div>
                <h1 className='text-3xl font-black font-mono'>Programming Stories</h1>
            </div>
            <div>
                <img className='w-10 h-10 rounded-full' src="../../../public/download.jpeg" alt="" />
            </div>      
            </div>   
            <hr className='border-1 border-neutral my-4 w-11/12 mx-auto'/>          
        </div>
    );
};

export default Header;