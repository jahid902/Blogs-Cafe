import React from "react";

const Post = (props) => {
  const { _id, picture, authorPicture, blogTitle, name, minute, published } =
    props.singleData;
  return (
    <div className="my-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="picture" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={authorPicture}
                alt=""
              />
              <div>
                <h2 className="card-title">{name}</h2>
                <small>{published}</small>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <p>{minute} min read</p>
              </div>
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold my-3">{blogTitle}</h1>
          <div className="card-actions justify-start">
            <button className="btn btn-link">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
