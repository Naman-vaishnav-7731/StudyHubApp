import { useState, useEffect } from "react";

const Registration = () => {
  // initial fome value
  const intialValue = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    password: "",
  };

  const [Formvalue, setFormvalue] = useState(intialValue);
  const [FormError, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [showForm, setshowForm] = useState(true);

  // handle change event
  const Handlechange = (event) => {
    const { name, value } = event.target;
    setFormvalue({ ...Formvalue, [name]: value });
    console.log({ Formvalue });
  };

  //handle onsubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(isValidate(Formvalue));
    setisSubmit(true);
  };

  //Implement form validations
  const isValidate = (values) => {
    const error = {};

    if (!values.fname) {
      error.fname = "first Name is Required";
      console.log("fname is called");
    }
    if (!values.lname) {
      error.lname = "Last name is Required";
    }

    if (!values.phone) {
      error.phone = "phone is required";
    } else if (values.phone.length !== 10) {
      error.phone = "Phone number must be 10 digits";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (
      !/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(values.email)
    ) {
      error.email = "Invalid email address";
    } else {
    }

    if (!values.address) {
      error.address = "address is required";
    }

    if (!values.pincode) {
      error.pincode = "Pincode is required";
    } else if (values.pincode.length !== 6) {
      error.pincode = "Pincode must be 6 digit";
    }

    if (!values.password) {
      error.password = "Password is required";
    }

    return error;
  };

  useEffect(() => {
    console.log({ FormError });
    if (Object.keys(FormError).length === 0 && isSubmit) {
      console.log("formvalues", Formvalue);

      let storedUser =
        JSON.parse(localStorage.getItem("UserInformation")) || [];
      storedUser.push(Formvalue);

      //Store data in localstorage
      localStorage.setItem("UserInformation", JSON.stringify(storedUser));
      // window.location.reload();
      setshowForm(false);
    }
  }, [FormError]);

  // return form
  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <form onSubmit={handleSubmit} method="post">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <input
              type="text"
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
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="First name"
              value={Formvalue.fname}
              onChange={Handlechange}
              name="fname"
            />
            <p className="error m-auto text-[red] text-center capitalize mt-2">
              {FormError.fname}
            </p>
          </div>

          <div class="form-group mb-6">
            <input
              type="text"
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
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Last name"
              value={Formvalue.lname}
              onChange={Handlechange}
              name="lname"
            />
            <p className="error m-auto text-[red] text-center capitalize mt-2">
              {FormError.lname}
            </p>
          </div>
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
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
            id="exampleInput125"
            placeholder="Email address"
            value={Formvalue.email}
            onChange={Handlechange}
            name="email"
          />
          <p className="error m-auto text-[red] capitalize mt-2">
            {FormError.email}
          </p>
        </div>
        <div class="form-group mb-6">
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
            id="exampleInput126"
            placeholder="Password"
            value={Formvalue.password}
            onChange={Handlechange}
            name="password"
          />
          <p className="error m-auto text-[red] capitalize mt-2">
            {FormError.password}
          </p>
        </div>
        <div class="form-group mb-6">
          <input
            type="number"
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
            id="Phone"
            placeholder="Phone"
            value={Formvalue.phone}
            onChange={Handlechange}
            name="phone"
          />
          <p className="error m-auto text-[red] capitalize mt-2">
            {FormError.phone}
          </p>
        </div>
        <div class="form-group mb-6">
          <input
            type="number"
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
            id="Pincode"
            placeholder="Pincode"
            value={Formvalue.pincode}
            onChange={Handlechange}
            name="pincode"
          />
          <p className="error m-auto text-[red] capitalize mt-2">
            {FormError.pincode}
          </p>
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
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
            id="Address"
            placeholder="Address"
            value={Formvalue.address}
            onChange={Handlechange}
            name="address"
          />
          <p className="error m-auto text-[red] capitalize mt-2">
            {FormError.address}
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
