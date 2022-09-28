import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TodoItemListProps } from "./models/card-props";
import { TodoItemCard } from "./TodoItemCard";

export default function TodoItemList(props: TodoItemListProps) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {props.items.map((item) => {
            return (
              <Grid item xs={4} md={2}>
                <TodoItemCard
                  todoItem={item}
                  handleDelete={props.handleDelete}
                  handleClickPin={props.handleClickPin}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
