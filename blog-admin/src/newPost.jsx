import "./newPost.css";


const SERVER_URL = process.env.SERVER_URL;

function NewPost() {
  return (
    <form
      className="newPost"
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch(`${SERVER_URL}/posts/add-post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            title: e.target.title.value,
            text: e.target.text.value,
          }),
        });
        window.location.href = '/posts';
      }}
    >
      <h2>Create a new post</h2>
      <div>
        <label>Title:</label>
        <input type="text" name="title" />
      </div>
      <div className="newCommentTextDiv">
        <label>Text:</label>
        <textarea type="text" name="text"></textarea>
      </div>

      <button type="submit">POST</button>
    </form>
  );
}

export default NewPost;
