import KuvaLogo from "../media/KuvaLogo.png";
import { Link, useLocation } from "react-router-dom";
import {cn} from "../lib/utils";
import { motion } from "framer-motion";

const routes = [
  { name: "Detections", path: "/" },
  { name: "Accounts", path: "/accounts" },
  { name: "Settings", path: "/settings" },
];

export default function NavigationBar() {
  
  const activePathname = useLocation().pathname;

  return (
    // <div
    //   style={{
    //     height: "100%",
    //     width: "15%",
    //     backgroundColor: "#222222",
    //   }}
    // >
    //   <img style={{ width: "95%" }} src={KuvaLogo} alt="Kuva Systems Logo"/>
    //   <div>
    // <Link to="/">Home</Link>
    // <Link to="/accounts">About</Link>
    // <Link to="/settings">Contact</Link>
    //   </div>
    // </div>
    <header className="flex flex-col md:flex-row gap-y-4 pt-6 md:pt-0 md:gap-y-0 items-center justify-between md:h-20 h-36 px-3 sm:px-9 bg-kuvaGray">
     <Link to="/"><img className="h-8" src={KuvaLogo} alt="Kuva Systems Logo"/></Link>
    <nav className="h-full ">
     <ul className="flex gap-x-6 h-full text-sm">
        {routes.map((route) => (
          <li
            className={cn(
              " hover:text-white flex items-center relative transition",
              {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              }
            )}
            key={route.path}
          >
            <Link to={route.path}>{route.name}</Link>
            {activePathname === route.path && (
              <motion.div layoutId="header-active-link" className="bg-accent h-0.5 w-full absolute bottom-6"></motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
}

