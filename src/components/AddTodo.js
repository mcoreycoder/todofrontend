import React, { Component } from 'react'

import {baseURL} from './ReadTodo'

export class addTodo extends Component {
    state = {
        title: ''
    }

    post = async() => {
        const URL = `${baseURL}/todo`;
        const response = fetch (URL, {
            method: 'post',
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

    onSubmit = async(e) => {
        e.preventDefault();
        await this.post()
    }

    onChange = (e) => {
        this.setState({ title: e.target.value });
        console.log(this.state)
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                style={{ flex: '10', padding: '5px'}} 
                placeholder={"Add Todo"} 
                value={this.state.title} 
                onChange={this.onChange}
                />
                <input type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default addTodo
 