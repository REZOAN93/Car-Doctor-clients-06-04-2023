import "./App.css";
import {RouterProvider } from "react-router-dom";
import router from "./Router/routes";

function App() {
  return (
    <div data-theme="winter" className=" container max-w-screen-xl m-auto my-3">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
