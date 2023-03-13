import { Outlet } from "react-router-dom";
import Navbar from "./components/organism/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Inicio</h1>
      <Outlet />
    </div>
  );
}

export default App;
