import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import "./TodoItemCard.css";
import { TodoItemCardProps } from "./models/card-props";
import TodoItemModal from "./TodoItemModal";

export function TodoItemCard(props: TodoItemCardProps) {
  const [open, setOpen] = useState(false);

  const handleModalClose = () => setOpen(false);

  const handleOpenModal = (e: unknown) => {
    setOpen(true);
  };

  return (
    <>
      <Card className="todo-item-card" variant="outlined">
        <CardContent onClick={handleOpenModal}>
          <Typography variant="h5" component="div">
            {props.todoItem.title}
          </Typography>
          <Typography variant="h6" component="div">
            {props.todoItem.body}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.todoItem.date}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => props.handleDelete(props.todoItem?.id || 0)}
            aria-label="delete item"
          >
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton arial-label="archive item">
            <ArchiveIcon />
          </IconButton>
          <IconButton
            arial-label="pin item"
            onClick={() => props.handleClickPin(props.todoItem)}
          >
            {props.todoItem.pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>
        </CardActions>
      </Card>
      <TodoItemModal
        todoItem={props.todoItem}
        open={open}
        onClose={handleModalClose}
        handleDelete={() => alert("DELETE FROM MODAL")}
        handleClickPin={() => alert("PIN FROM MODAL")}
      ></TodoItemModal>
    </>
  );
}
