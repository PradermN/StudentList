import React, {Fragment, useEffect, useState} from "react";


const ListTodos = () => {

    const [todos, setTodos] = useState([]); //default value of todos in an empty array

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
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
