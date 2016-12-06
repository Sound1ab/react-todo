import React from 'react';
import EditDisplay from './EditDisplay';
import TextDisplay from './TextDisplay';
import Buttons from './Buttons';

export default (props) => (
    <div key={props.task.id}>
        {props.task.edit ? <EditDisplay defaultValue={props.task.task} editText={props.editText} id={props.task.id} /> : <TextDisplay task={props.task.task} />}
        <Buttons deleteNote={props.deleteNote} editText={props.editText} id={props.task.id} />
    </div>
)