import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/TopBar";

const MainLayout = () => {
  return (
    <section>
      <TopBar />
      <Outlet />
    </section>
  );
};

export default MainLayout;
