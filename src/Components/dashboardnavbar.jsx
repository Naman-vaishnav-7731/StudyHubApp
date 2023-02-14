const Dashboardnavbar = () => {
  return (
    <div class="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul class="relative">
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Welcome To AdminDashboard
          </a>
        </li>
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            User Informations
          </a>
        </li>
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Change Password
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboardnavbar;
