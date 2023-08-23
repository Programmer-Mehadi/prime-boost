import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CorporatePage from "../pages/CorporatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/landing-page/corporate",
    element: <CorporatePage />,
  },
]);

export default router;
