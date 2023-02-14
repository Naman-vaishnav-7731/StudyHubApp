import "../Css/Header.css";
import Login from "./Login";
import Signupmodal from "./SignupModal";
import modalContext from "../Context/Modalcontext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { isLogged, setisLogged } = useContext(modalContext);
  const email = JSON.parse(localStorage.getItem("loggeduser"));
  let adminEmail = "admin@gmail.com";
  console.log(email);

  return (
    <>
      <header>
        <nav class="nav flex flex-wrap items-center justify-between px-4 w-4/5 m-auto p-5">
          <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <span class="font-semibold text-xl tracking-tight">StudyHub💻</span>
          </div>

          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span class="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li class="border-t md:border-none">
              <Link to="/">
                <button
                  type="button"
                  class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
                >
                  Home
                </button>
              </Link>
            </li>

            <li class="border-t md:border-none">
              <button
                type="button"
                class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                onClick={() => {
                  setisLogged(false);
                  navigate("/");
                }}
              >
                {isLogged ? "Logout" : "Sign In"}
              </button>
            </li>

            {isLogged && email.useremail === adminEmail ? (
              <Link to="/admindashboard">
                <li class="border-t md:border-none">
                  <button
                    type="button"
                    class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
                  >
                    Admindasboard
                  </button>
                </li>
              </Link>
            ) : isLogged ? (
              <Link to="/userdashboard">
                <li class="border-t md:border-none">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Signupmodal"
                    class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
                  >
                    Userdashboard
                  </button>
                </li>
              </Link>
            ) : (
              <li class="border-t md:border-none">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Signupmodal"
                  class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
                >
                  Sign Up
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {isLogged ? null : <Login />}
      {isLogged ? null : <Signupmodal />}
    </>
  );
};

export default Header;
