import React, { Component } from 'react';
import "./App.css"
import FormInput from './Forminput/FormInput';
import TodoContainer from './TodoContainer/TodoContainer';
import uuid from "react-uuid"

export default class App extends Component {

  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.title,
      completed: false
    }
    // console.log(newItem);
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      title: '',
      id: uuid(),
      editItem: false
    })

  }

  clearList = (e) => {
    e.preventDefault();
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    })

    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem);
    this.setState({
      items: filteredItems,
      title: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  handleComplete = (id) => {
    console.log(this.state.items);
    const todoIndex = this.state.items.findIndex(list => {
      return id === list.id;
    });

    const todo = {
      ...this.state.items[todoIndex]
    }
    console.log(todo)
    const currentCompletedval = todo.completed;
    todo.completed = !currentCompletedval;
    console.log(todo.completed)
    const todos = [...this.state.items];

    todos[todoIndex] = todo;
    console.log(todo)
    console.log(todos[todoIndex])
    console.log(todos)
    this.setState({
      items: todos
    })

    // console.log(this.state.items);

  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <FormInput item={this.state.title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearList={this.clearList}
          editItem={this.state.editItem}

        />
        <TodoContainer
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
        />
      </div>
    )
  }
}
