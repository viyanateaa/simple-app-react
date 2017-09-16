
import React, { Component } from 'react';
import Task from './Task.js';
import TaskList from './TaskList';
import './App.css';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar/>
          <Date />

          <br />
          <TaskList />
          <AddButton />
      </div>

    );
  }
}

export default App;
