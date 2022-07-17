import React from 'react';
import "./index.css"
import SearchBox from './SearchBox/SearchBox.component';
import SideBar from './SideBar/SideBar.component';
import WorkSpace from './WorkSpace/WorkSpace.component';

function App() {
  return (
    <>
      <header>
        <SearchBox />
      </header>
      <main>
        <SideBar />
        <WorkSpace />
      </main>
    </>
  );
}

export default App;
