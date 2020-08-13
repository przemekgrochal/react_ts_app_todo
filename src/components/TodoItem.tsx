import React, { SyntheticEvent } from "react";
import { Form, FormControl, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleTodo, updateNameTodo } from "../redux/todosSlice";
import { deleteTodo } from "../redux/todosSlice";
import uuid from "uuid";

const TodoItem = (props: any) => {
    const { id, name, complete } = props.todo;
    const dispatch = useDispatch();

    const handleNameChange = (e: any) => {
        e.preventDefault();
        dispatch(updateNameTodo({ id, name: e.target.value }));
    };

    const handleCompleteChange = (e: SyntheticEvent<HTMLInputElement>) => {
        dispatch(toggleTodo({ id, complete: !complete }));
    };

    const handleRemove = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (complete) {
            dispatch(
                deleteTodo({
                    id: id,
                    name,
                    complete: false,
                })
            );
        } else {
            window.alert("You cannot delete a task until you complete it!");
        }
    };

    return (
        <div className="todos">
            <Form>
                <Row>
                    <Col>
                        <Button
                            type="button"
                            variant="danger"
                            onClick={handleRemove}
                        >
                            Remove
                        </Button>
                    </Col>
                    <Col>
                        <FormControl
                            className="p-3"
                            type="text"
                            placeholder={"name place holder"}
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            className="p-3"
                            id={id}
                            type="checkbox"
                            label="Status: DONE"
                            checked={complete}
                            onChange={handleCompleteChange}
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default TodoItem;
