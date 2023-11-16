import "./App.css";
import Login from "./login.jsx";
import Posts from "./posts.jsx";
import SinglePost from "./singlePost.jsx";
import NewPost from "./newPost.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/:postId",
    element: <SinglePost />,
  },
  {
    path: "/new-post",
    element: <NewPost />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
