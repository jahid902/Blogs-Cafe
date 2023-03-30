import React from "react";

const Post = (props) => {
  console.log(props.singleData);
  const { _id, picture, authorPicture, blogTitle, age, name } =
    props.singleData;
  return (
    <div className="my-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="picture"
          />
        </figure>
        <div className="card-body">
        <div className="flex gap-3">
            <img className="w-10 h-10 rounded-full" src={authorPicture} alt="" />
        <div>
        <h2 className="card-title">{name}</h2>
        <small>Age : {age}</small>
        </div>       
        </div>
        
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
