import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import SkeletonUpdateUser from "../../Skeletons/SkeletonUpdateUser";
import FormData from "../../ViewForm/FormData";
import ButtonUpdate from "../ButtonUpdate";

function DataByUser() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserByID = async () => {
    const doc = await db.collection("responseData").doc(id).get();
    setUser(doc.data());
  };

  useEffect(() => {
    getUserByID();
  }, []);
  return (
    <main className="sm:w-3/5 w-full">
      <div className="flex items-center justify-center gap-3">
        <i
          onClick={() => navigate(-1)}
          className="bi bi-arrow-left cursor-pointer text-4xl bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center"
        ></i>
        <h1 className="uppercase my-12 sm:text-3xl text-2xl font-bold">
          User Registered
        </h1>
      </div>

      {user ? <FormData initialValue={user} /> : <SkeletonUpdateUser/>}

    
  
    </main>
  );
}

export default DataByUser;
