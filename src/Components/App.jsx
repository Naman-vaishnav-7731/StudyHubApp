import "../Css/App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Admindashboard from "./Admindashboard";
import Userdashboard from "./Userdashboard";
import Changepassword from "./Changepassword";
import ModalState from "../Context/Modalstate";
import Userinfomation from "./Userinformation";
import Landingpage from "./LandingPage";

const App = () => {
  return (
    <ModalState>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="admindashboard" element={<Admindashboard />}>
            <Route path="Userinfomation" element={<Userinfomation />}></Route>
            <Route path="Changepassword" element={<Changepassword />}></Route>
          </Route>
          <Route path="userdashboard" element={<Userdashboard />}></Route>
          <Route index element={<Landingpage />}></Route>
        </Route>
      </Routes>
    </ModalState>
  );
};

export default App;
