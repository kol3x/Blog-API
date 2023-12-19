import "./login.css";


const SERVER_URL = process.env.SERVER_URL;

function Login() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch(`${SERVER_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
          }),
        });
        window.location.href = '/new-post';
      }}
      className="loginForm"
    >
      <h2>Prove me you are kol3x</h2>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div className="newCommentTextDiv">
        <label>Password:</label>
        <input type="password" name="password" />
      </div>

      <button type="submit">LOGIN</button>
    </form>
  );
}

export default Login;
