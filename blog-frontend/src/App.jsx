import "./App.css";
import Posts from "./posts";
import SinglePost from "./singlePost";
import Comments from "./comments";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/:postId",
    element: <SinglePost />,
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
