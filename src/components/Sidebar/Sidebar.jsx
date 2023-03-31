import React from 'react';

const Sidebar = (props) => {

    // console.log(props);
    // const {blogTitle} = props.blogName;
    return (
        <div className='bg-slate-200 text-center'>
            <div className='border-2 border-indigo-700'>
            <h3 className='text-2xl font-bold text-indigo-600 p-4'> Spent time on read : {props.time} </h3>
            </div>
            <h3 className='my-6 font-bold text-2xl text-start px-6'>Bookmarked blogs : {props.counter}</h3>
            <div className='bg-slate-300'>
            <h1 className='text-xl font-bold  '>{props.blogName} </h1>
            </div>
        </div>
    );
};

export default Sidebar;