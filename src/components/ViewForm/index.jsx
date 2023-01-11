import React from "react";
import FormData from "./FormData";
import LogoPresentation from "./LogoPresentation";

function ViewFrom() {
  return (
    <main className="sm:flex block  w-full h-screen">
      <LogoPresentation  />
      <section className="sm:w-3/5 flex">
        <FormData />
      </section>
    </main>
  );
}

export default ViewFrom;
