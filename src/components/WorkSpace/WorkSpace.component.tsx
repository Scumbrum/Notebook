import React from 'react';
import "./WorkSpace.style.css"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useTypedSelector } from '../../hooks/useTypesSelector';

function WorkSpace() {
    const {selected} = useTypedSelector(state => state.noteReducer)

    return (
        <section className='workspace'>
            {selected}
            <div className="workspace__date">29 October 2019, 12:17</div>
            <h1 className='workspace__title'>Новая заметка</h1>
            <div className='workspace__content'>
                <SimpleMDE />;
            </div>
            <div className='workspace__controllers'>
                <button className='workspace__edit'>Edit</button>
                <button className='workspace__delete'>Delete</button>
            </div>
        </section>
    );
}

export default WorkSpace;