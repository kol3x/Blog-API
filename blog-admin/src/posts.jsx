import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SERVER_URL = process.env.SERVER_URL;

function Posts() {
  const [update, setUpdate] = useState(0);
  const [posts, setPosts] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("${SERVER_URL}/posts");
      const posts = await response.json();
      setPosts(posts);
    };
    fetchData();
  }, [update]);

  return (
    <div>
      <Link to={`/new-post`}>
        <h2>Add a post</h2>
      </Link>
      <h1>Blog Posts</h1>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Link to={`/${post._id}`}>
                <h2>{post.title}</h2>
              </Link>
              <h3>
                {post.isVisible ? "Visible to users" : "Not visible to users"}
              </h3>
              <p>{post.date}</p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await fetch(
                    `${SERVER_URL}/${post._id}/toggle`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({
                        postid: e.target.hidePost.value,
                      }),
                    }
                  );
                  setUpdate((v) => v + 1);
                }}
              >
                <label htmlFor="hidePost">Make post hidden</label>
                <input hidden name="hidePost" value={post._id} readOnly />
                <button type="submit">Switch</button>
              </form>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await fetch(
                      `${SERVER_URL}/${post._id}/delete`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({
                          postid: e.target.deletePost.value,
                        }),
                      }
                    );

                    // Log to check if the fetch request was successful
                    console.log("Fetch request successful");

                    setUpdate((v) => {
                      console.log("Previous state:", v);
                      const newValue = v + 1;
                      console.log("New state:", newValue);
                      return newValue;
                    });
                  } catch (error) {
                    console.error("Error occurred:", error);
                  }
                }}
              >
                <label htmlFor="deletePost">Delete post</label>
                <input hidden name="deletePost" value={post._id} readOnly />
                <button type="submit">Delete</button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;
