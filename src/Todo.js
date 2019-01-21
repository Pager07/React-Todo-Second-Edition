import React from 'react'

const Todos = ({todos , todoDelete}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {todoDelete(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : ('No Todos Left');
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;