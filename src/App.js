import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    // create unique item id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // copy current list of items
    const list = [...this.state.list];
    // add new item
    list.push(newItem);
    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: '',
    });
  }
  deleteItem(id) {
    // copy current list
    const list = [...this.state.list];
    // filter item being deleted
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='navbar bg-primary'>
            <h1 className='text-center x-large'>To Do List</h1>
            <p>Made with React</p>
          </div>
          <h1 className='text-left lead'>Create/Remove</h1>
          <p className='text-right'>Add items to the list below</p>
          <input
            type='text'
            placeholder='Type item here'
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button
            className='btn btn-success btn-block'
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li
                  key={item.id}
                  className='lead text-primary text-center card grid-2'
                >
                  {item.value}{' '}
                  <button
                    className='btn-danger btn btn-block'
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
