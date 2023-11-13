import useFetch from 'react-fetch-hook';
import "./singlePost.css";

function Comments({ postid }) {
  const {data: comments, error} = useFetch(`http://localhost:5005/posts/${postid}/comments`);
  return(
    <div className="commentsBox">
      {comments && comments.length > 0 && <h3>Comments</h3>}
      {error && (
        <div>{`There is a problem fetching the comments data - ${error}`}</div>
      )}
      <div className='allComments'>
        {comments &&
        comments.map((comment) => (
          <div className='eachComment' key={comment._id}>
            <h4 className='commentAuthor'>by: {comment.username}</h4>
            <p className='commentText'>{comment.text}</p>
            <p className='commentTime'> {comment.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments;