import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidenavbar from "./Sidenavbar";

const Admindashboard = () => {
  return (
    <div>
      <Sidenavbar />
      <Outlet />
    </div>
  );
};

export default Admindashboard;
