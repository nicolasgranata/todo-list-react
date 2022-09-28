import { ChangeEvent, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { TodoItem } from "../../models";
import { getTodoItems } from "../../services/todo-item.service";
import { TodoItemCardForm } from "../todo-item/TodoItemCardForm";
import TodoItemList from "../todo-item/TodoItemList";
import {
  addTodoItem,
  deleteTodoItem,
  updateTodoItem,
} from "../../services/todo-item.service";

import "./HomePage.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [todoPinnedItems, setTodoPinnedItems] = useState<TodoItem[]>([]);
  const [todoOtherItems, setTodoOtherItems] = useState<TodoItem[]>([]);
  const [todoItem, setTodoItem] = useState<TodoItem>({
    id: 0,
    title: "",
    body: "",
    pinned: false,
    date: "",
  });

  useEffect(() => {
    async function init() {
      await fetchData();
    }
    init();
  }, []);

  const fetchData = async () => {
    const response = await getTodoItems();
    setTodoPinnedItems(getFilteredTodoItems(response, true));
    setTodoOtherItems(getFilteredTodoItems(response, false));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setTodoItem((prevTodoItem) => ({
      ...prevTodoItem,
      [id]: value,
    }));
  };

  const handleOnClickPinCard = async (item: TodoItem) => {
    const updatedItem = {
      ...item,
      pinned: !item.pinned,
    };
    try {
      await updateTodoItem(updatedItem);
      await fetchData();
    } catch (error) {
      console.error("Error trying to fetch todo item data");
    }
  };

  const handleOnClickPinCardForm = () => {
    setTodoItem((prevItem) => ({
      ...prevItem,
      pinned: !prevItem.pinned,
    }));
  };

  const handleSubmit = async () => {
    try {
      const payload: TodoItem = {
        ...todoItem,
        date: new Date().toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      };
      await addTodoItem(payload);
      await fetchData();
      handleClose();
    } catch (error) {
      console.error("Error trying to add a new todo item");
    }
  };

  const handleClose = () => {
    setTodoItem({
      title: "",
      body: "",
      pinned: false,
      date: "",
    });
    setOpen(false);
  };

  const handleDelete = async (todoItemId: number) => {
    try {
      await deleteTodoItem(todoItemId);
      await fetchData();
    } catch (error) {}
  };

  const handleSubmitCardUpdate = async (item: TodoItem) => {
    const updatedItem = {
      ...item,
    };
    try {
      await updateTodoItem(updatedItem);
      await fetchData();
    } catch (error) {
      console.error("Error trying to fetch todo item data");
    }
  };

  return (
    <>
      <section className="container-form">
        <TodoItemCardForm
          open={open}
          handleClose={handleClose}
          handleOpen={() => setOpen(true)}
          todoItem={todoItem}
          onSubmit={handleSubmit}
          onChange={handleChange}
          handleClickPin={handleOnClickPinCardForm}
        />
      </section>
      <section className="container-todoItems">
        {todoPinnedItems.length > 0 ? (
          <>
            <Typography variant="subtitle1">Pinned</Typography>
            <TodoItemList
              items={todoPinnedItems}
              handleDelete={handleDelete}
              handleClickPin={handleOnClickPinCard}
              onSubmitCard={handleSubmitCardUpdate}
            />
          </>
        ) : null}
      </section>
      <section className="container-todoItems">
        {todoOtherItems.length > 0 ? (
          <>
            <Typography variant="subtitle1">Others</Typography>
            <TodoItemList
              items={todoOtherItems}
              handleDelete={handleDelete}
              handleClickPin={handleOnClickPinCard}
              onSubmitCard={handleSubmitCardUpdate}
            />
          </>
        ) : null}
      </section>
    </>
  );
}

const getFilteredTodoItems = (
  todoItems: TodoItem[],
  isPinned: boolean
): TodoItem[] => {
  return todoItems
    .filter((item) => item.pinned === isPinned)
    .map((item) => {
      return {
        title: item.title,
        body: item.body,
        pinned: item.pinned,
        date: item.date,
        id: item.id,
      };
    });
};
