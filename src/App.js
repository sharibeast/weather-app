import Highlights from "./components/Highlights";
import Search from "./components/Search";

function App() {
  return (
    <div className="h-screen text-white bg-black md:flex ">
      <Search />
      <Highlights />
    </div>
  );
}

export default App;
