import { Todo } from "../../../typings";
import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};
async function fetchTodoById(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      // no cache - server side rendering
      //forced cache -static side generation
      //  next: {revalidate : 60 } - ISR Incremental static regenration
      next: {
        revalidate: 60,
      },
    }
  );
  const todoById: Todo = await res.json();
  return todoById;
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodoById(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-blue-300 border-2 m-2 shadow-lg rounded-sm">
      <h3>This is my TodoPage {todoId} </h3>
      <p>TId : {todo.id}</p>
      <p>TTitle : {todo.title}</p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t mt-4 text-right">TUserID: {todo.userId}</p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  //go ahead and fetch 200 pages and build the pages
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const todosTrimmed = todos.splice(0, 10);
  return todosTrimmed.map((todo) => ({
    todoId: todo.id.toString(),
  }));
  //return type as follows
  // [{todo:"1"} , {todo: "2"}]
}
