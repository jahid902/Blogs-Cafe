import React from 'react';

const Blogs = (props) => {
    return (
        <div>
            <p className='font-bold text-lg hover:bg-gray-50'>{props.blogTitle}</p>
        </div>
    );
};

export default Blogs;