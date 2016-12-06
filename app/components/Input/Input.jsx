import React from 'react';

export default ({updateText, addNote}) => (
    <div>
        <input type="text" onChange={updateText}/>
        <button onClick={addNote}> + </button>
    </div>
)