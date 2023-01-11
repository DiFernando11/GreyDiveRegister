import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import SkeletonCardUser from "../Skeletons/SkeletonCardUser";
import CardUser from "./CardUser";
function ViewResponseAll() {
  const [users, setUsers] = useState(null);

  const handleGetUsers = async () => {
    db.collection("responseData").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((user) => {
        docs.push({ ...user.data(), id: user.id });
      });
      setUsers(docs);
    });
  };
  const handleDeleteUser = async (id) => {
    await db.collection("responseData").doc(id).delete();
  };

  useEffect(() => {
    handleGetUsers();
  }, []);
  return (
    <main className="relative h-screen">
      <Link to={"/"}>
        <i className="bi bi-house-fill text-4xl rounded-full absolute bg-cyan-400 w-20 h-20 left-1 top-1 flex items-center justify-center"></i>
      </Link>
      <section className="cardGridColumn h-screen">
        {users?.length
          ? users.map((user) => (
              <CardUser user={user} handleDeleteUser={handleDeleteUser} />
            ))
          : null}
        {!users &&
          !users?.length &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <SkeletonCardUser key={value} />
          ))}
        {!users?.length && users && <h1 className="m-auto">No hay usuarios registrados actualmente</h1>}
      </section>
    </main>
  );
}

export default ViewResponseAll;
