import { useEffect, useState } from "react";
import "./comments.css";

const SERVER_URL = process.env.SERVER_URL;

function Comments({ postid, user, text }) {
  const [comments, setComments] = useState(undefined);

  useEffect(() => {
    const url = `${SERVER_URL}/posts/${postid}/comments`;

    const fetchData = async () => {
      const response = await fetch(url);
      const comments = await response.json();
      setComments(comments);
    };
    fetchData();
  }, [user, text, postid]);
  return (
    <div className="commentsBox">
      {comments && comments.length > 0 && <h3>Comments</h3>}
      <div className="allComments">
        {comments &&
          comments.map((comment) => (
            <div className="eachComment" key={comment._id}>
              <h4 className="commentAuthor">by: {comment.username}</h4>
              <p className="commentText">{comment.text}</p>
              <p className="commentTime"> {comment.date}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;
