import { ChangeEvent } from "react";
import { TodoItem } from "../../../models";

export interface TodoItemCardProps {
  todoItem: TodoItem;
  handleDelete: (todoItemId: number) => void;
  handleClickPin: (todoItem: TodoItem) => void;
  onSubmitCard: (todoItem: TodoItem) => void;
}

export interface TodoItemModalProps extends TodoItemCardProps {
  open: boolean;
  onClose: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TodoItemListProps {
  items: TodoItem[];
  handleDelete: (todoItemId: number) => void;
  handleClickPin: (todoItem: TodoItem) => void;
  onSubmitCard: (todoItem: TodoItem) => void;
}

export interface TodoItemCardFormProps {
  open: boolean;
  todoItem: TodoItem | null;
  onSubmit: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickPin: () => void;
}
