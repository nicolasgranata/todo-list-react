import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { TodoItemModalProps } from "./models/card-props";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
};

export default function TodoItemModal(props: TodoItemModalProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent>
            <FormGroup>
              <TextField
                id="body"
                placeholder="Create a note..."
                variant="standard"
                style={{
                  marginTop: "1rem",
                }}
                value={props.todoItem.title}
                // onChange={props.onChange}
              />
              <TextField
                id="body"
                placeholder="Create a note..."
                variant="standard"
                style={{
                  marginTop: "1rem",
                }}
                value={props.todoItem.body}
                // onChange={props.onChange}
              />
            </FormGroup>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="delete item"
              onClick={() => props.handleDelete(props.todoItem?.id || 0)}
            >
              <DeleteOutlineIcon />
            </IconButton>
            <IconButton arial-label="archive item">
              <ArchiveIcon />
            </IconButton>
            <IconButton arial-label="pin item">
              {props.todoItem.pinned ? (
                <PushPinIcon />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
            <Button
              onClick={props.onClose}
              style={{ color: "black" }}
              variant="text"
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
