import React, { Component } from 'react'

export class UpdateTodo extends Component {
    state = {
        _id: this.props._id,
        title: this.props.title
    }
put = async() => {
    const URL = 'http://localhost:5000/todo';
    const response = await fetch (URL, {
        method: 'put',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        }  
    }).then((e) =>{
        console.log('ReRender')
        this.props.render(e)
    });
     return response
}
onUpdate = async(e) => {
    e.preventDefault();
    await this.put()
    //  alert("updated")
}
onChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state)
};
render() {
    // const {_id, title} = this.props.todo;
    return (
        <form onSubmit={this.onUpdate} style={{ flex: '10', background: 'orange'}} >
            <input type="submit"
            style={btnStyle}
            value="Update"
            className="btn"
            />
            <input 
            placeholder={this.state.title} 
            value={this.state.title} 
            onChange={this.onChange}
            /> 
        </form>
    )
    }
}
const btnStyle = {
    display: 'flex',
    background: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'left'
}
export default UpdateTodo