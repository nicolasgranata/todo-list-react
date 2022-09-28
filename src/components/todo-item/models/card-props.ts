import { ChangeEvent } from "react";
import { TodoItem } from "../../../models";

export interface TodoItemCardProps {
  title: string;
  body: string;
  date: string;
  pinned: boolean;
  id: number;
  handleDelete: (todoItemId: number) => void;
  handleClickPin: (updateAndRefresh: boolean) => void;
}

export interface TodoItemModalProps extends TodoItemCardProps {
  open: boolean;
  onClose: () => void;
}

export interface TodoItemListProps {
  items: TodoItem[];
  handleDelete: (todoItemId: number) => void;
  handleClickPin: (updateAndRefresh: boolean) => void;
}

export interface TodoItemCardFormProps {
  open: boolean;
  todoItem: TodoItem | null;
  onSubmit: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickPin: (updateAndRefresh: boolean) => void;
}
