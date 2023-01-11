import React from "react";
import { useParams } from "react-router-dom";
import { handleAlertError, handleAlertSuccess } from "../../../alerts";
import { db } from "../../../firebase";
function ButtonUpdate({ formData }) {
  const { id } = useParams();

  const handleEditUser = async () => {
    try {
      await db.collection("responseData").doc(id).update(formData);
      handleAlertSuccess(
        null,
        null,
        `Se modifico los datos de ${formData.full_name} de manera exitosa `
      );
    } catch (error) {
      handleAlertError();
    }
  };
  return (
    <button
      type="button"
      onClick={handleEditUser}
      className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
    >
      Modificar
    </button>
  );
}

export default ButtonUpdate;
