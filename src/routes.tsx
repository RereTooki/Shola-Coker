import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import BirthdayWishForm from "./components/BirthdayWishForm";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />,
  },
  {
    path: "/wishme", // Root Route
    element: <BirthdayWishForm />,
  },
  // {
  //   path: "/joinUs", // about Page
  //   element: <JoinUs />,
  // },
]);

export default router;
