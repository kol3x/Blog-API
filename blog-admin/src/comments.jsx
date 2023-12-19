import { useEffect, useState } from "react";
import "./singlePost.css";


const SERVER_URL = process.env.SERVER_URL;

function Comments({ postid, update, setUpdate }) {
  const [comments, setComments] = useState(undefined);

  useEffect(() => {
    const url = `${SERVER_URL}/posts/${postid}/comments`;

    const fetchData = async () => {
      const response = await fetch(url);
      const comments = await response.json();
      setComments(comments);
    };
    fetchData();
  }, [update, postid]);
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
              <form onSubmit={async (e) => {
                  e.preventDefault();
                  await fetch(
                    `${SERVER_URL}/${postid}/comments/${comment._id}/delete`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({
                        commentid: e.target.commentDelete.value,
                      }),
                    }
                  );
                  setUpdate((v) => v + 1);
                }}>
                <label htmlFor="commentDelete">Delete comment</label>
                <input hidden name="commentDelete" value={comment._id} readOnly/>
                <button type="submit">Delete</button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;
