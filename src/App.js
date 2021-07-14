import Highlights from "./components/Highlights";
import Search from "./components/Search";

function App() {
  return (
    <div className="text-white bg-gray-900 md:flex md:bg-blue-500">
      <Search />
      <Highlights />
    </div>
  );
}

export default App;
