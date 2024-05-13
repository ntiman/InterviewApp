import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <section className="bg-background text-white">
        <NavigationBar />
        <section className="pt-8 h-screen flex flex-col sm:gap-4 sm:py-4 px-9">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
      </section>
    </Router>
  );
}

export default App;
