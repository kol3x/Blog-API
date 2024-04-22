import "./App.css";
import Posts from "./posts";
import SinglePost from "./singlePost";
import MenuBar from "./components/menuBar";
import BottomMenuBar from "./components/bottomMenuBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MenuBar /> <Posts /> <BottomMenuBar />
      </>
    ),
  },
  {
    path: "/:postId",
    element: (
      <>
        <MenuBar /> <SinglePost /> <BottomMenuBar />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
