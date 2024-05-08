import KuvaLogo from "../media/KuvaLogo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div
      style={{
        height: "100%",
        width: "15%",
        backgroundColor: "#222222",
      }}
    >
      <img style={{ width: "95%" }} src={KuvaLogo} />
      <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
