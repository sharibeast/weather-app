import Highlights from './components/Highlights';
import Search from './components/Search';
import React from 'react';

function App() {
  return (
    <div className="h-screen text-white bg-black lg:flex">
      <Search />
      <Highlights />
    </div>
  );
}

export default App;
