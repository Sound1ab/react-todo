import React from 'react';

export default class Buttons extends React.Component {
    render() {
        const props = this.props;
        const buttonStyle = {
            backgroundColor: "blue",
        }
        return (
            <div>
                <button style={buttonStyle} onClick={props.deleteNote.bind(null, props.id)}> - </button>
                <button onClick={props.editText.bind(null, props.id)}> Edit </button>
            </div>
        )
    }
}