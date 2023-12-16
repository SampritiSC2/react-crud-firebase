import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: "add",
            element: <AddPost />,
          },
          {
            path: ":id/edit",
            element: <EditPost />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

// /posts/add

function App() {
  return <RouterProvider router={router} />;
}

export default App;
