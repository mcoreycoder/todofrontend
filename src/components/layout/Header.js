import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header style ={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

const headerStyle = {
    fontfamily: 'Times New Roman',
    lineheight: '1.5',
    backgroundcolor: 'purple',
    textalign: 'center',
    padding: '20 px'
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}
export default Header;
