import React from "react";

function SelectInput({ item, formData, handleChangeData }) {
  return (
    <select
      value={formData[item.name]}
      onChange={handleChangeData}
      name={item.name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-6 "
      required={item.required}
    >
      <option value="">{item.label}</option>
      {item.options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
