// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name="Rich" />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
