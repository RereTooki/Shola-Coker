import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />,
  },
  {
    path: "/wishme", // Root Route
    element: <Homepage />,
  },
  // {
  //   path: "/joinUs", // about Page
  //   element: <JoinUs />,
  // },
]);

export default router;
