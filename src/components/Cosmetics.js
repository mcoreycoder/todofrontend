import React, { Component } from 'react'
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import PropTypes from 'prop-types';


export class Cosmetics extends Component {
    // state = {
    //     title: ''
    // }

    // post = async() => {
    //     const URL = 'http://localhost:5000/addTodo';
    //     const response = await fetch (URL, {
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }  
    //     })
    //      return response
    // }
    render() {
        return (
            // <div style={this.getStyle()}>
            //     {title}
            //     <UpdateTodo todo={this.props._id}/>
            //     <DeleteTodo todo={this.props._id}/>
            // </div>
            <div className="container">
            <UpdateTodo _id={this.props.todo._id} title={this.props.todo.title} render={(e)=>this.props.render(e)} />
            <DeleteTodo todo={this.props.todo._id} render={this.props.render}/>
        </div>
        )
    }
}

Cosmetics.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Cosmetics
