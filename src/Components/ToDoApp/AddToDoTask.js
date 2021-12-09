import React, { Component } from 'react';

class AddToDoTask extends Component {
    state = {
        content: null
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addToDoTask(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor='content'>Add new task:</label>
                    <input type='text' id='content' onChange={this.handleOnChange} value={this.state.content}></input>
                    
                    <button>Add task</button>
                </form>
            </div>
        )
    }
}

export default AddToDoTask;