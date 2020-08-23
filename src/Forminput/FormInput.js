import React from 'react'
import './FormInput.css'
export default function FormInput(props) {
    return (
        <form>
            <span><i className="fas fa-book"></i></span>
            <input type="text" className="todo-input"
                value={props.item}
                onChange={props.handleChange}
            />
            <button type="submit"
                className={props.editItem ? "todo-edit" : "todo-btn"}
                onClick={props.handleSubmit}>
                {props.editItem ? <i className="fas fa-pen"></i> : <i className="fas fa-plus-square"></i>}
            </button>
            <button className="all-clear" onClick={props.clearList}>AC</button>
        </form >
    )
}
