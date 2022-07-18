import React, { useState } from 'react';
import "./WorkSpace.style.css"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { dateStringify, deleteNote, insertUpdatedNote } from './WorkSpace.service';
import { useActions } from '../../hooks/useActions';
import {marked} from "marked"

function WorkSpace() {
    const {selected, notes} = useTypedSelector(state => state.noteReducer)
    const [editable, setEditable] = useState(false)
    const {setNotes} = useActions()
    const currentNote = notes.find(note => note && note.id === selected)

    return (
        currentNote ? (
        <section className='workspace'>
            <div className="workspace__date">{dateStringify(new Date(Date.parse(currentNote.date)))}</div>
            <h1 className='workspace__title'>{currentNote.name}</h1>
            <div className='workspace__content'>
                {
                    editable ?
                    <SimpleMDE
                        value={currentNote.content}
                        onChange={(newContent) => setNotes(insertUpdatedNote(notes, selected, newContent))} />:
                    <p dangerouslySetInnerHTML={{__html:marked.parse(currentNote.content)}} />
                }
            </div>
            <div className='workspace__controllers'>
                <button
                    className='workspace__edit'
                    onClick={()=>setEditable(!editable)}
                >
                    {!editable ? "Edit" : "Ok"}
                </button>
                <button
                    className='workspace__delete'
                    onClick={()=>setNotes(deleteNote(notes, selected))}
                >
                    Delete
                </button>
            </div>
        </section>):
        (<></>)
    );
}

export default WorkSpace;