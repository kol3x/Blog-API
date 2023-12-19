import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";

function Posts() {
  const { data: posts, error } = useFetch("http://localhost:5005/posts");
  return (
    <div>
      <h1>Blog Posts</h1>
      {error && (
        <div>{`There is a problem fetching the blog data - ${error}`}</div>
      )}
      <div className="allPosts">
        {posts &&
          posts
            .filter((post) => post.isVisible)
            .map((post) => (
              <div key={post._id} className="eachPost">
                <Link to={`/${post._id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.date}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Posts;
