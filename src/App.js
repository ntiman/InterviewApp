import "./App.css";
import NavigationBar from "./pages/NavigationBar";
import ImageCarousel from "./pages/ImageCarousel";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <ImageCarousel />
    </div>
  );
}

export default App;
