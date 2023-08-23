import { createBrowserRouter } from "react-router-dom";
import CorporatePage from "../pages/CorporatePage";
import MainLayout from "../layout/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <CorporatePage />,
      },
      {
        path: "/landing-page/corporate",
        element: <CorporatePage />,
      },
    ],
  },
]);

export default router;
