import React, {Fragment, useEffect, useState} from "react";


const ListTodos = () => {

    const [todos, setTodos] = useState([]); //default value of todos in an empty array

    // get todos function
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos"); // get is the default method, so we don't need to set it
            const jsonData = await response.json();

            setTodos(jsonData.rows); // console.log(jsonData) to how it looks like
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []); // [] to make only one request


    // delete todo function
    const deleteTodo = async (id) => {
        try {
            // `` to be able to add variable id
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    }

    console.log(todos);

    return(
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>*/}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td><button className="btn btn-danger"
                            onClick={() => deleteTodo(todo.todo_id)}
                            >Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
