import React from "react";

function CheckBox({item, formData, handleChangeData}) {
  return (
    <div className="flex gap-2 justify-center mb-2">
      <label
        htmlFor={item.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase"
      >
        {item.label}
      </label>
      <input
        type={item.type}
        id={item.name}
        name={item.name}
        required={item.required}
        value={formData[item.name]}
        onChange={handleChangeData}
        checked ={formData.terms_and_conditions}
      />
    </div>
  );
}

export default CheckBox;
