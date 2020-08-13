import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    return (
        <>
            {useSelector((state: any) => state.todos).map(
                (todo: any, index: number) => {
                    return <TodoItem todo={todo} key={todo.id} />;
                }
            )}
        </>
    );
};

export default TodoList;
