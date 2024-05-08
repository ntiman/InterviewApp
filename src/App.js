import "./App.css";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <section className="flex flex-col mx-auto bg-kuvaBackground text-white overflow-y-scroll min-h-screen">
      <Router>
      <NavigationBar />
      <section className="px-4  pt-8">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        </section>
      </Router>
    </section>
  );
}

export default App;
