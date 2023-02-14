import { Link } from "react-router-dom";

const Sidenavbar = () => {
  return (
    <div class="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
      <div class="pt-4 pb-2 px-6">
        <div class="flex items-center">
          <div class="shrink-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-10"
              alt="Avatar"
            />
          </div>
          <div class="grow ml-3">
            <p class="text-sm font-semibold text-blue-600">Naman Vaishnav</p>
          </div>
        </div>
      </div>
      <ul class="relative px-1">
        <Link to="/admindashboard/Userinfomation">
          <li class="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer">
            User Information
          </li>
        </Link>
        <Link to="/admindashboard/Changepassword">
          <li
            class="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            id="sidenavSecEx2"
          >
            Change Password
          </li>
        </Link>
      </ul>
      <hr class="my-2" />
    </div>
  );
};

export default Sidenavbar;
