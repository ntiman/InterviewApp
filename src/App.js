import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ImageCarousel from "./components/ImageCarousel";

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
