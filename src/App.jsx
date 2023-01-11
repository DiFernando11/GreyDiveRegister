import "./App.css";
import { Route, Routes } from "react-router-dom";
import ViewResponseAll from "./components/ViewResponseAll";
import ViewYourResponse from "./components/ViewYourResponse";
import ViewFrom from "./components/ViewForm";

function App() {
  return (
    // <div className="App">
    //   <FormData />
    // </div>
    <Routes>
      <Route path="/" element={<ViewFrom />} />
      <Route path="/form/responseAll" element={<ViewResponseAll />} />
      <Route path="/form/response/:id" element={<ViewYourResponse />} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
