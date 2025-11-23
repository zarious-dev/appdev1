import { useState, useEffect } from "react";
import axios from "axios";

function TodosFetchAxios() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                setTodos(response.data);
            } catch (err) {
                console.error("Error fetching todos:", err);
                setError("Failed to fetch todos");
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Todo List (Axios)</h2>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <li>
                            <strong>Title:</strong> {todo.title} <br />
                            <strong>Status:</strong> {todo.completed ? "Completed" : "Not Completed"}  <hr />
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TodosFetchAxios;