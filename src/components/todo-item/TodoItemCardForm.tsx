import { Button, FormGroup, IconButton, TextField } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { TodoItemCardFormProps } from "./models/card-props";

export function TodoItemCardForm(props: TodoItemCardFormProps) {
  return (
    <>
      <div
        style={{
          width: "30%",
          border: "0.05rem solid lightgrey",
          borderRadius: "0.7rem",
          padding: "0.5rem",
          boxShadow: "0px 1px 6px rgba(17, 14, 14, 0.404)",
        }}
        hidden={props.open}
      >
        <FormGroup>
          <TextField
            id="standard-basic"
            placeholder="Create a note..."
            variant="standard"
            onClick={props.handleOpen}
          />
        </FormGroup>
      </div>
      <form
        style={{
          width: "30%",
          border: "0.05rem solid lightgrey",
          borderRadius: "0.7rem",
          padding: "0.5rem",
          boxShadow: "0px 1px 6px rgba(17, 14, 14, 0.404)",
        }}
        hidden={!props.open}
      >
        <FormGroup>
          <TextField
            id="title"
            placeholder="Title"
            variant="standard"
            value={props.todoItem?.title}
            onChange={props.onChange}
          />
          <TextField
            id="body"
            placeholder="Create a note..."
            variant="standard"
            style={{ marginTop: "1rem" }}
            value={props.todoItem?.body}
            onChange={props.onChange}
          />
          <FormGroup row={true}>
            <IconButton arial-label="pin item" onClick={props.onClickPin}>
              {props.todoItem?.pinned ? (
                <PushPinIcon />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
            <Button
              style={{ color: "black", marginTop: "1rem" }}
              variant="text"
              onClick={props.onSubmit}
            >
              Add
            </Button>
            <Button
              style={{ color: "black", marginTop: "1rem" }}
              variant="text"
              onClick={props.handleClose}
            >
              Close
            </Button>
          </FormGroup>
        </FormGroup>
      </form>
    </>
  );
}
