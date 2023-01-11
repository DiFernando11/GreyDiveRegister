import React, { useEffect, useState } from "react";
import { itemsDB } from "../../../itemsDB";
import { db } from "../../../firebase";
import {
  handleAlertError,
  handleAlertInfoUser,
  handleAlertLoading,
  handleAlertSuccess,
} from "../../../alerts";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../inputs/ButtonSubmit";
import CheckBox from "../inputs/CheckBox";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import ButtonUpdate from "../../ViewYourResponse/ButtonUpdate";

function FormData({ initialValue }) {
  const [formData, setFormData] = useState({
    full_name: initialValue?.full_name || "",
    email: initialValue?.email || "",
    birth_date: initialValue?.birth_date || "",
    country_of_origin: initialValue?.country_of_origin || "",
    terms_and_conditions: initialValue?.terms_and_conditions || false,
  });
  const navigate = useNavigate();

  const handleChangeFormData = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "terms_and_conditions" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAlertLoading();
    try {
      const existedUser = await db
        .collection("responseData")
        .where("email", "==", formData.email)
        .get();

      if (existedUser.docs.length) {
        setFormData({
          full_name: "",
          email: "",
          birth_date: "",
          country_of_origin: "",
          terms_and_conditions: false,
        });

        return handleAlertInfoUser(
          `el email ${formData.email} ya ha sido registrado anteriormente`
        );
      }
      await db.collection("responseData").doc().set(formData);

      const doc = await db
        .collection("responseData")
        .where("email", "==", formData.email)
        .get();
      handleAlertSuccess(navigate, doc.docs[0].id, "Registrado correctamente`");
    } catch (error) {
      handleAlertError();
      console.log(error);
    }
  };

  return (
    <section className="w-11/12 px-8 flex flex-col m-auto ">
      {!initialValue && <h1 className="my-8 uppercase text-4xl">greydive Register</h1>}
      <form onSubmit={handleSubmit}>
        {itemsDB.items.map((item) => {
          if (item.type === "submit")
            return !initialValue ? (
              <ButtonSubmit key={item.label} />
            ) : (
              <ButtonUpdate formData={formData} />
            );
          if (item.type === "checkbox")
            return !initialValue ? (
              <CheckBox
                key={item.label}
                item={item}
                formData={formData}
                handleChangeData={handleChangeFormData}
              />
            ) : (
              <span>Aceptaste los terminos y condiciones</span>
            );
          if (item.type === "select")
            return (
              <SelectInput
                key={item.label}
                item={item}
                formData={formData}
                handleChangeData={handleChangeFormData}
              />
            );
          return (
            <TextInput
              key={item.label}
              item={item}
              formData={formData}
              handleChangeData={handleChangeFormData}
            />
          );
        })}
      </form>
    </section>
  );
}

export default FormData;
