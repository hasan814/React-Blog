import { createBrowserRouter } from "react-router-dom";

import Author from "../pages/Author";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs/:slug", element: <Blog /> },
      { path: "/authors/:slug", element: <Author /> },
    ],
  },
]);

export default router;
