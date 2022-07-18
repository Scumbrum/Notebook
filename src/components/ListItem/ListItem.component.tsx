import React, { useMemo } from 'react';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { Note } from '../../models/databaseModels';
import Item from './Item';
import { cutContent } from './ListItem.service';
import "./ListItem.style.css"

function ListItem() {
  const {notes, selected, searchQuery} = useTypedSelector(state => state.noteReducer)

  const filteredNotes = useMemo<Note[]>(() => {
    if(!searchQuery) {
      return notes
    }
    return notes.filter(note => note.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [notes, searchQuery])
  const renderNotes = () => 
    filteredNotes.map(note => (
      <li key={note.id}>
        <Item
          id={note.id as number}
          content={cutContent(note.content)}
          name={note.name}
          date={new Date(Date.parse(note.date))}
          isSelected = {note.id === selected}/>
      </li>
    ))

  return (
    <ul className='listItem'>
      {renderNotes()}
    </ul>
  );
}

export default ListItem;