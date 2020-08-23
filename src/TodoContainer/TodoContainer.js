import React, { Component } from 'react'
import TodoList from './TodoList'
import "./TodoContainer.css"

export default class TodoContainer extends Component {
    render() {
        const { items, handleDelete, handleEdit, handleComplete } = this.props;
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        items.map((item) => {
                            return (
                                <TodoList
                                    key={item.id}
                                    title={item.title}
                                    handleDelete={() => handleDelete(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                    handleComplete={() => handleComplete(item.id)}
                                    completeCheck={item.completed}
                                />
                            );
                        })
                    }

                </ul>

            </div>
        )
    }
}
