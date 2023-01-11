import React from "react";
import { Link } from "react-router-dom";

function CardUser({ user, handleDeleteUser }) {
  return (
    <div className="w-full m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
      <div className="flex justify-end px-4 pt-4">
        <i
          className="bi bi-person-dash text-2xl cursor-pointer"
          onClick={() => handleDeleteUser(user.id)}
        ></i>
      </div>
      <div className="flex flex-col items-center pb-10">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {user.email}
        </span>
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src="https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg"
          alt="Bonnie image"
        />
        <h5 className="uppercase mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.full_name}
        </h5>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {user.birth_date}
        </span>

        <Link to={`/form/response/${user.id}`}>
          <button className="mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            MODIFICAR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardUser;
