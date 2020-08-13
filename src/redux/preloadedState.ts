import uuid from "uuid";

const preloadedState = {
    todos: [
        {
            id: uuid(),
            name: "Add Task",
            complete: true,
        },
    ],
};

export default preloadedState;
