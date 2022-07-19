import React, { useEffect, useState} from 'react';
import { db } from '../database/db';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';
import "./index.css"
import SearchBox from './SearchBox/SearchBox.component';
import SideBar from './SideBar/SideBar.component';
import WorkSpace from './WorkSpace/WorkSpace.component';

function App() {
  const {setNotes} = useActions()
  const {notes, selected} = useTypedSelector(state => state.noteReducer)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if(notes.length !==0){
      return
    }
    db.notes.toArray()
    .then(r => {
      console.log(r)
      setNotes(r)
    })
    .catch(error => {
      alert(error.message)
    })
  }, [setNotes, setLoading, notes])

  useEffect(()=> {
    if(selected===-1) {
      return
    }
    const changed = notes.find(note => 
      note && note.id === selected
    )
    if(!changed) {
      db.notes.delete(selected)
    } else {
      db.notes.update(selected, {name: changed.name, content: changed.content, date: changed.date})
    }
  }, [notes,selected])

  return (
    !loading ?(
      <>
        <header>
          <SearchBox />
        </header>
        <main>
          <SideBar/>
          <WorkSpace />
        </main>
      </>): 
      <h1 className='loader'>Loading...</h1>
  );
}

export default App;
