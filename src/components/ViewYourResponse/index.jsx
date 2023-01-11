import LogoPresentation from "../ViewForm/LogoPresentation";
import DataByUser from "./DataByUser";

function ViewYourResponse() {
  return (
    <main className="flex border w-full h-screen">
      <DataByUser />
      <LogoPresentation/>
    </main>
  );
}

export default ViewYourResponse;
