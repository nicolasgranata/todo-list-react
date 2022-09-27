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
                  key={item.title}
                  body={item.body}
                  title={item.title}
                  pinned={item.pinned}
                  date={item.date}
                  id={item.id ?? 0}
                  handleDelete={props.handleDelete}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
