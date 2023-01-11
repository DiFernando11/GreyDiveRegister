import React from "react";

function TextInput({item , formData , handleChangeData}) {
  return (
    <React.Fragment >
      <label
        htmlFor={item.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase"
      >
        {item.label}
      </label>
      <div className="relative mb-6 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="bi bi-rocket-takeoff-fill"></i>
        </div>
        <input
          type={item.type}
          id={item.name}
          name={item.name}
          required={item.required}
          value={formData[item.name]}
          onChange={handleChangeData}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="completed..."
        />
      </div>
    </React.Fragment>
  );
}

export default TextInput;
