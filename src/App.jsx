import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <section className="flex flex-col mx-auto bg-background text-white overflow-y-scroll min-h-screen">
        <NavigationBar />
        <section className="px-4 pt-8 bg-card">
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
