import React from 'react';
import Blogs from '../Blogs/Blogs';

const Sidebar = (props) => {

    return (
        <div className='bg-slate-200 text-center my-4'>
            <div className='border-2 border-indigo-700 rounded-lg'>
            <h3 className='text-2xl font-bold text-indigo-600 p-4'> Spent time on read : {props.time} </h3>
            </div>
            <h3 className='my-6 font-bold text-2xl text-start px-6 text-indigo-600'>Bookmarked blogs : {props.counter}</h3>
            <div className='bg-slate-200'>
            <Blogs blogTitle={props.blogName}></Blogs>
            </div>
        </div>
    );
};

export default Sidebar;