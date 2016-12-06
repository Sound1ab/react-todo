import React from 'react';
import Note from './Note';

export default (props) => (
    <div>
        {props.notes.map((task) => {
            return <Note task={task} deleteNote={props.deleteNote} editText={props.editText}/>
        })}
    </div>
)
