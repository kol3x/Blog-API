import useFetch from "react-fetch-hook";
import Comments from "./comments";
import { useParams, Link } from "react-router-dom";
import "./singlePost.css";
import React, { useState } from "react";

const SERVER_URL = process.env.SERVER_URL;

function SinglePost() {
  const [update, setUpdate] = useState(0);
  const { postId } = useParams();
  const { data: post, error } = useFetch(
    `${SERVER_URL}/${postId}`
  );

  return (
    <div>
      <Link to={`/posts`}>
        <h2>Home</h2>
      </Link>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>
        {post && (
          <div className="singlePostContent">
            <h1>{post.title}</h1>
            <p className="postText">{post.text}</p>
            <p>{post.date}</p>
            <Comments update={update} postid={post._id} setUpdate={setUpdate}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
