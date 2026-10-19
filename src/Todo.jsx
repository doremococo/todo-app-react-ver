import { useState } from "react"
import "./style.css"

export const Todo = () => {
    const [todos, setTodos] = useState({});
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue === "") return;
        const newTodoId = crypto.randomUUID();
        setTodos((prev) => ({
            ...prev,
            [newTodoId]: {
                id: newTodoId,
                todo: inputValue,
                isComplete: false
            }
        }))
        setInputValue("");
    }

    const completeTodo = (todoId, isComplete) => {
        setTodos((prev) => ({
            ...prev,
            [todoId]: {
                ...prev[todoId],
                isComplete: isComplete
            }
        }))
    }

    const deleteTodo = (todoId) => {
        setTodos((prev) => {
            const newTodos = { ...prev };
            delete newTodos[todoId];
            return newTodos;
        })
    }

    return (
        <>
            <input type="text" name="inputTodo"
                id="inputTodos" value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={addTodo}>追加</button>

            <h2>未完了のTODO</h2>
            {Object.values(todos)
                .filter((todo) => todo.isComplete === false)
                .map((todo) => (
                    <div key={todo.id}>
                        <input type="checkbox" name="completeTodo" checked={todo.isComplete}
                            onChange={(event) => completeTodo(todo.id, event.target.checked)} />
                        <p>{todo.todo}</p>
                        <p>{todo.id}</p>
                        <button onClick={() => deleteTodo(todo.id)}>削除</button>
                    </div>
                ))}

            <h2>完了したTODO</h2>
            {Object.values(todos)
                .filter((todo) => todo.isComplete === true)
                .map((todo) => (
                    <div key={todo.id}>
                        <input type="checkbox" name="completeTodo"
                            checked={todo.isComplete}
                            onChange={(event) => completeTodo(todo.id, event.target.checked)} />
                        <p>{todo.todo}</p>
                        <p>{todo.id}</p>
                        <button onClick={() => deleteTodo(todo.id)}>削除</button>
                    </div>
                ))}
        </>
    )
}