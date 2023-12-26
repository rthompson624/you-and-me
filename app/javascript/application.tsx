// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./services/api/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name="Rich" />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "*",
    element: <NotFound name="Dude" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
