import "./App.css";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <hr style={{width: "1186px",}}/>

      <Content/>
    </div>
  );
}

export default App;
