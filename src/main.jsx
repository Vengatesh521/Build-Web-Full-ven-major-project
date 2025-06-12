import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AllPosts from "./pages/AllPosts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: "Home Element" },
      { path: "/signup", element: <Signup /> },
      { path: "/all-posts", element: <AllPosts /> },
      { path: "/login", element: <Login /> },
      { path: "/add-post", element: <AddPost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
