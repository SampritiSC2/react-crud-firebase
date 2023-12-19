import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import RootLayout from "./pages/RootLayout";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import { AuthContext } from "./context/auth-context";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

// /posts/add

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />;
    </AuthContext.Provider>
  );
}

export default App;
