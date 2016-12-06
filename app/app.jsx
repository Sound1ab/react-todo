import React from 'react';
import Notes from './components/Notes/Notes';
import Input from './components/Input/Input';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: Math.floor((Math.random() * 1000) + 1),
                    task: 'task 1',
                    edit: false
                },
                {
                    id: Math.floor((Math.random() * 1000) + 1),
                    task: 'task 2',
                    edit: false
                }
            ],
            currentNote: "",
        }
    }

    render() {
        return (
            <ul>
                <div>
                    <Input className="add" updateText={this.updateText} addNote={this.addNote} />
                    <Notes notes={this.state.notes} deleteNote={this.deleteNote} editText={this.editText} />
                </div>
            </ul>
        );
    }
    editText = (id, event) =>{
        // this.setState({
        //     showEdit: this.state.showEdit ? this.state.showEdit = false : this.state.showEdit = true
        // })
        // console.log(event.nativeEvent.toElement.nodeName);
        if(event.nativeEvent.target.tagName === "BUTTON") {
            this.setState({
                notes: this.state.notes.map((task) => {
                    if (id === task.id && task.edit === false) {
                        task.edit = true;
                    }
                    else if (id === task.id && task.edit === true) {
                        task.edit = false;
                    }
                    return task;
                })
            })
        } else {
            this.setState({
                notes: this.state.notes.map((task) => {
                    if (id === task.id) {
                        task.task = event.target.value;
                    }
                    return task;
                })
            })
        }
    }
    updateText = (event) => {
        this.setState({
            currentNote: event.target.value
        });
    }
    addNote = () => {
        if(this.state.currentNote) {
            console.log("add note");
            this.setState({
                notes: this.state.notes.concat([{
                    id: Math.floor((Math.random() * 1000) + 1),
                    task: this.state.currentNote,
                    edit: false
                }])
            });
        }
    }
    deleteNote = (id) => {
        this.setState({
            notes: this.state.notes.filter((task) => {
                return task.id !== id;
            })
        })

    }
}