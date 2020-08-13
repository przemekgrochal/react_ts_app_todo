import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import uuid from "uuid";

const TodoAdd = () => {
    const state = useSelector((state: any) => state.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(state);
        console.log(state.length);

        if (state.length < 10) {
            if (name.trim() === "") return null;
            dispatch(
                addTodo({
                    id: uuid(),
                    name,
                    complete: false,
                })
            );
            setName("");
        } else {
            window.alert("The maximum number of tasks is 10");
        }
    };

    const handleChange = (e: any) => {
        setName(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                className="p-3"
                type="text"
                placeholder="todo..."
                value={name}
                onChange={handleChange}
            />

            <Button type="submit" variant="primary">
                Add
            </Button>
        </Form>
    );
};

export default TodoAdd;
