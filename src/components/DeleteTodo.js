import React, { Component } from 'react'

export class DeleteTodo extends Component {
    state = {
        _id: this.props.todo
    }

    delete = async() => {
        const URL = 'http://localhost:5000/todo';
        const response = await fetch (URL, {
            method: 'delete',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }  
            
        }).then(() =>{
            console.log('ReRender')
            this.props.render()
        });
         return response
    }
    onDelete = async(e) => {
        e.preventDefault();
        await this.delete()
    }
    render() {
        // const _id = this.props.todo;
        return (
               <button onClick={this.onDelete}
               style={btnStyle}>Delete</button>
        )
    }
}
const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}
export default DeleteTodo
