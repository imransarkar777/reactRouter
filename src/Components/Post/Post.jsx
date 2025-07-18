import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  return (
    <div>
      <h4>POst of id : {id}</h4>
      <div>
        <p>title : {title}</p>
      </div>
      <Link to={`/post/${id}`}> Post Details </Link>
    </div>
  );
};

export default Post;
