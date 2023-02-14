import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import modalContext from "../Context/Modalcontext";

const Loginform = () => {
  const navigate = useNavigate();
  const { setisLogged } = useContext(modalContext);

  // from fileds intial value
  const intialValue = {
    email: "",
    password: "",
  };

  const [FromValue, setFromValue] = useState(intialValue);
  const [FromError, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  // handle the form
  const handleFrom = (event) => {
    const { name, value } = event.target;
    setFromValue({ ...FromValue, [name]: value });
    console.log("f", { FromValue });
  };

  // handle the submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(isValidate(FromValue));
    setisSubmit(true);
  };

  // Implement validation
  const isValidate = (values) => {
    const error = {};

    if (!values.email) {
      error.email = "Email is required";
    } else if (
      !/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(values.email)
    ) {
      error.email = "Invalid email address";
    } else {
    }

    if (!values.password) {
      error.password = "Password is required";
    }

    return error;
  };

  useEffect(() => {
    if (Object.keys(FromError).length === 0 && isSubmit) {
      let adminEmail = "admin@gmail.com";
      const userData = JSON.parse(localStorage.getItem("UserInformation"));
      const loggeduser = {};
      let isMatch = true;

      for (let index in userData) {
        if (
          userData[index].email === FromValue.email &&
          userData[index].password === FromValue.password
        ) {
          // store logged user data in localstorage
          loggeduser.useremail = userData[index].email;

          //set data in localstorage
          localStorage.setItem("loggeduser", JSON.stringify(loggeduser));

          if (userData[index].email === adminEmail) {
            navigate("/admindashboard");
            setisLogged(true);
          } else {
            navigate("/userdashboard");
            setisLogged(true);
          }

          break;
        } else {
          isMatch = false;
        }
      }
    }
  }, [FromError]);

  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto">
      <form onSubmit={handleSubmit}>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail2"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={FromValue.email}
            onChange={handleFrom}
            name="email"
          />
          <p className="error m-auto text-[red] text-center capitalize mt-1">
            {FromError.email}
          </p>
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="Password"
            value={FromValue.password}
            onChange={handleFrom}
            name="password"
          />
          <p className="error m-auto text-[red] text-center capitalize mt-1">
            {FromError.password}
          </p>
        </div>

        <button
          type="submit"
          class="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Loginform;
