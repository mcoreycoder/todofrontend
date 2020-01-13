import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import ReadTodo from './components/ReadTodo';
import about from './components/pages/about';



import './App.css';

class App extends Component {
  state = {
    todo: []
  }
  render() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <ReadTodo todo={this.state.todo} render={(e)=>this.fetchData(e)}/> 
        </React.Fragment>
      )} />
      <Route path="/about" component={about} />
      </div>
      </Router>

    
  );
}
}

export default App;








