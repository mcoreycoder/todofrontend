import React, { Component } from 'react';
import Cosmetics from './Cosmetics';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';

import {baseURL} from '../App'

// export const baseURL = `http://localhost:5000`

class ReadTodo extends Component {
  state = {
    todo: []
  }
  fetchData = async () => {
    const url = `${baseURL}/todo`;
    console.log("URL", baseURL)
    const todos = await fetch(url);
    const json = await todos.json();
    console.log("json", json)
    // await this.setState({todo: json})
    return this.renderTodos(json);
  }
  renderTodos=(todos)=>{
     let todoMapped = todos.map((to)=>{
      console.log("map", to._id)
      return (<Cosmetics render={(e)=>this.fetchData(e)} key={to._id} todo={to}/>)
    }
    )
    this.setState({todo: todoMapped})
  }
  componentDidMount(){
    this.fetchData()
  }
  render() {
    // render={(e)=>this.fetchData(e)}
  return (
    <div>
    <AddTodo render={this.fetchData} />
    {this.state.todo}
    </div>
  );
}
}


ReadTodo.propTypes = {
    todo: PropTypes.array.isRequired
}

export default ReadTodo;
