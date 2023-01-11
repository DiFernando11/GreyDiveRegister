import React from "react";

function SkeletonUpdateUser() {
  return (
    <div>
      <div role="status" className=" animate-pulse m-auto w-10/12">
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4 m-auto"></div>
        <div className="h-12 bg-gray-200 rounded-xl  w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4 m-auto"></div>
        <div className="h-12 bg-gray-200 rounded-xl  w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4 m-auto"></div>
        <div className="h-12 bg-gray-200 rounded-xl  w-full mb-2.5"></div>
        <div className="h-12 bg-gray-200 rounded-xl  w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4 m-auto"></div>
        <div className="h-12 bg-gray-200 rounded-xl  w-full mb-2.5"></div>
      </div>
    </div>
  );
}

export default SkeletonUpdateUser;
