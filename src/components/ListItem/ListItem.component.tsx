import React, { useDeferredValue, useMemo } from 'react';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { Note } from '../../models/databaseModels';
import { stringToDate } from '../../utils/dateCaster';
import Item from './Item';
import { cutContent } from './ListItem.service';
import "./ListItem.style.css"

function ListItem() {
  const {notes, selected, searchQuery} = useTypedSelector(state => state.noteReducer)
  const defferedQuery = useDeferredValue(searchQuery)
  const filteredNotes = useMemo<(Note)[]>(() => {
    if(!defferedQuery) {
      return notes.filter(note => !!note) as Note[]
    }
    return notes.filter(note => note && note.name.toLowerCase().includes(defferedQuery.toLowerCase())) as Note[]
  }, [notes, defferedQuery])
  const renderNotes = () => 
    filteredNotes.map(note => (
      <li key={note.id}>
        <Item
          id={note.id as number}
          content={cutContent(note.content)}
          name={note.name}
          date={stringToDate(note.date)}
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