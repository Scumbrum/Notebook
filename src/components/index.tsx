import React, { useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { Note } from '../models/databaseModels';
import "./index.css"
import SearchBox from './SearchBox/SearchBox.component';
import SideBar from './SideBar/SideBar.component';
import WorkSpace from './WorkSpace/WorkSpace.component';

const notes:Note[] = [
  {
    id:1,
    content:"hello1",
    date: new Date().toString(),
    name: "Record 1"
  },
  {
    id:2,
    content:"hello2",
    date: new Date().toString(),
    name: "Record 3"
  },
  {
    id:3,
    content:"hello3",
    date: new Date().toString(),
    name: "Record 2"
  },
]

function App() {
  const {setNotes} = useActions()

  useEffect(() => {
    setNotes(notes)
  }, [setNotes])

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
