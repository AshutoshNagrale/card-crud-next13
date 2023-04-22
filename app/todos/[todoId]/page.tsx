import { Todo } from "../../../typings";

import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};
async function fetchTodoById(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todoById: Todo = await res.json();
  return todoById;
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodoById(todoId);
  console.log(todo);

  return (
    <div className="p-10 bg-blue-300 border-2 m-2 shadow-lg rounded-sm">
      <h3>This is my TodoPage {todoId} </h3>
      <p>Id : {todo.id}</p>
      <p>TTitle : {todo.title}</p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t mt-4 text-right">TUserID: {todo.userId}</p>
    </div>
  );
}

export default TodoPage;
