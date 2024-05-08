import "./App.css";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <Router>
      <NavigationBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
