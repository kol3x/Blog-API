import useFetch from "react-fetch-hook";
import Comments from "./comments";
import { useParams, Link } from "react-router-dom";
import "./singlePost.css";
import React from "react";

function SinglePost() {
  const { postId } = useParams();
  const { data: post, error } = useFetch(
    `http://localhost:5005/posts/${postId}`
  );

  return (
    <div>
      <Link to={`/`}>
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
            <Comments postid={post._id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
