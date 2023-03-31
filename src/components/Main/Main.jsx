import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    
    const [news, setNews] = useState([]);
    const [time, setTime] = useState(0);
    const [blogTitle, setBlogTitle] = useState("");
    const [count, setCount] = useState(0)
    

    const showTime = (readTime) =>{
        setTime(time + readTime);
    }
    
    
    const title = (title) =>{        
        setCount(count+1);    
    setBlogTitle(blogTitle + title);
      
    }

    
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch("fake-data.json");
            const data = await res.json();
            setNews(data);
        }
        loadData();
    },[]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 my-14'>
         <div>
         {
            news.map(singleNews =><Post singleData={singleNews} 
                timeCount = {showTime} 
                blogTitle={title}              
                key={singleNews._id} ></Post>)
         }
         </div>
         <div>
            <Sidebar
            time={time}
            counter={count}
            blogName={blogTitle}
            ></Sidebar>
        </div>
        </div>
    );
};

export default Main;