import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/Login"}>Login</Link>
    </nav>
  );
};
export default Navbar;
