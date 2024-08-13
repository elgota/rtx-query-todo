"use client"

import {
    useGetTodosQuery
} from "../api/apiSlice"

/* import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core" */
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo("")
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
                <button className="submit">
                    {/* <FontAwesomeIcon icon={faUpload}/> */}Upload
                </button>
            </div>
        </form>

        let content;
        if (isLoading) {
            content= <p>Loading...</p>
        } else if (isSuccess) {
            content = JSON.stringify(todos);
            
        } else if (isError) {
            content = <p>{error}</p>
        }

        // console.log("Flag content: ", content);
        

        return (
            <main>
                <h1>Todo List</h1>
                {newItemSection}
                {content}
            </main>
        )
}

export default TodoList;