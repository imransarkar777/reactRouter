import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h3>Post details of id : {id} </h3>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;