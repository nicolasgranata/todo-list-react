import { TodoItem } from "../models";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getTodoItems(): Promise<TodoItem[]> {
  return fetch("http://localhost:3001/todo/").then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function addTodoItem(todoItem: TodoItem): Promise<TodoItem> {
  return fetch("http://localhost:3001/todo/", {
    method: "POST",
    body: JSON.stringify(todoItem),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => {
    if (response.status === 201) return response.json();
    throw response;
  });
}

export async function deleteTodoItem(todoItemId: number): Promise<void> {
  return fetch("http://localhost:3001/todo/" + todoItemId, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => {
    if (response.status !== 200) {
      throw response;
    }
  });
}

export async function updateTodoItem(todoItem: TodoItem): Promise<TodoItem> {
  return fetch("http://localhost:3001/todo/" + todoItem.id, {
    method: "PUT",
    body: JSON.stringify(todoItem),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => {
    if (response) return response.json();
    throw response;
  });
}
