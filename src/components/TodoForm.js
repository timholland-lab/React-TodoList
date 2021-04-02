import React, { Component } from 'react';
import shortid from 'shortid';

export class TodoForm extends Component {
    
    state = {
        text: '' 
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        });
            console.log(event.target.name)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,

    });
    this.setState({
       text: "" 
    });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todos.."/
            >
            <button onClick={this.handleSubmit}>add todo</button>
                   </form>
            )
 
    };
}

export default TodoForm
