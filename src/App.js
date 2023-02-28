
import "./App.css";
import VerticalBar from "./components/VerticalBar";
import HorizontalBar from "./components/HorizontalBar";

function App() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-[500px] ">
        <VerticalBar />
      </div>
      <div className="h-[500px]">
        <HorizontalBar />
      </div>
    </div>
  );
}

export default App;
