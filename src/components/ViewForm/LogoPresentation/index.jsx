import React from "react";
import { Link } from "react-router-dom";

function LogoPresentation() {
  return (
    <section className="bg-gray-900 w-full sm:w-2/5 flex  flex-col justify-center ">
      <div className="block m-auto">
        <img
          className="hidden m-auto w-11/12 sm:block"
          src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
          alt="logo greydive"
        />
        <Link to={"/form/responseAll"}>
          <button className="w-46 font-bold mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
            ALL USERS
            <i className="bi bi-hand-index-thumb text-2xl ml-5"></i>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default LogoPresentation;
