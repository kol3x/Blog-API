import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";

const SERVER_URL = process.env.SERVER_URL;

function Posts() {
  const { data: posts, error } = useFetch(`${SERVER_URL}/posts`);
  return (
    <div>
      {error && (
        <div>{`There is a problem fetching the blog data - ${error}`}</div>
      )}
      <div className="allPosts">
        {posts &&
          posts
            .filter((post) => post.isVisible)
            .reverse()
            .map((post) => (
              <div key={post._id} className="eachPost">
                <Link to={`/${post._id}`}>
                  <h2 className="homePostTitle">{post.title}</h2>
                </Link>
                <p>{post.date}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Posts;
