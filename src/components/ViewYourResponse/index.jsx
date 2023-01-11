import LogoPresentation from "../ViewForm/LogoPresentation";
import DataByUser from "./DataByUser";

function ViewYourResponse() {
  return (
    <main className="flex flex-col-reverse sm:flex-row block w-full sm:h-screen">
      <DataByUser />
      <LogoPresentation />

    </main>
  );
}

export default ViewYourResponse;
