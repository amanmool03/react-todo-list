import React from 'react'

export default function TodoList(props) {
    return (
        <div className="todo">
            <li className={!props.completeCheck ? "todo-item" : "todo-item completed"}>{props.title}</li>
            <button className="complete-btn" onClick={props.handleComplete}><i className="fas fa-check"></i></button>
            <button className="edit-btn" onClick={props.handleEdit}><i className="fas fa-pen"></i></button>
            <button className="trash-btn" onClick={props.handleDelete}><i className="fas fa-trash"></i></button>
        </div>
    )
}
