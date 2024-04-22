import useFetch from "react-fetch-hook";
import Comments from "./comments";
import { useParams } from "react-router-dom";
import "./singlePost.css";
import React, { useState } from "react";
import DOMPurify from "dompurify";

const SERVER_URL = process.env.SERVER_URL;

function SinglePost() {
  const [updateComments, setUpdate] = useState(0);
  const [commentUsername, setCommentUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const { postId } = useParams();
  const { data: post, error } = useFetch(`${SERVER_URL}/posts/${postId}`);

  return (
    <div>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>
        {post && (
          <div className="singlePostContent">
            <h1 className="singlePostTitle">{post.title}</h1>
            <p
              className="postText"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.text),
              }}
            />
            <p>{post.date}</p>
            <Comments postid={post._id} update={updateComments} />
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await fetch(`${SERVER_URL}/posts/${postId}/new-comment`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    username: commentUsername,
                    text: commentText,
                  }),
                });
                setUpdate((v) => v + 1);
                setCommentText("");
                setCommentUsername("");
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
                  value={commentUsername}
                  onChange={(e) => {
                    setCommentUsername(e.target.value);
                  }}
                />
              </div>
              <div className="newCommentTextDiv">
                <label>Text:</label>
                <textarea
                  className="newCommentTextInput"
                  type="text"
                  name="text"
                  value={commentText}
                  onChange={(e) => {
                    setCommentText(e.target.value);
                  }}
                />
              </div>
              <button className="sendCommentBtn" type="submit">
                SEND
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
