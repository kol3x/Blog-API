import useFetch from "react-fetch-hook";
import Comments from "./comments";
import { useParams, Link } from "react-router-dom";
import "./singlePost.css";
import React, { useState } from "react";

const SERVER_URL = process.env.SERVER_URL;

function SinglePost() {
  const [update, setUpdate] = useState(0);
  const { postId } = useParams();
  const { data: post, error } = useFetch(`${SERVER_URL}/posts/${postId}`);

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
            <Comments update={update} postid={post._id} />
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await fetch(
                  `${SERVER_URL}/posts/${postId}/new-comment`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      username: e.target.username.value,
                      text: e.target.text.value,
                    }),
                  }
                );
                setUpdate((v) => v + 1);
              }}
              className="newComment"
            >
              <h2>Share your thoughts on the topic!</h2>
              <div className="newCommentUserDiv">
                <label>Username:</label>
                <input
                  className="newCommentUserInput"
                  type="text"
                  name="username"
                />
              </div>
              <div className="newCommentTextDiv">
                <label>Text:</label>
                <textarea
                  className="newCommentTextInput"
                  type="text"
                  name="text"
                />
              </div>
              <button type="submit">COMMENT</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
