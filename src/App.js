import "./App.css";
import VerticalBar from "./components/VerticalBar";
import HorizontalBar from "./components/HorizontalBar";
import AreaChat from "./components/AreaChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="grid   md:grid-cols-2 md:gap-10 gap-4 grid-cols-1">
      <div className="md:h-[500px]  ">
        <VerticalBar />
      </div>
      <div className="md:h-[500px]">
        <HorizontalBar />
      </div>
      <div className="md:h-[500px]">
        <AreaChat />
      </div>
      <div className="md:h-[500px]">
        <LineChart />
      </div>
      <div className="md:h-[500px]">
        <PieChart />
      </div>
    </div>
  );
}

export default App;
