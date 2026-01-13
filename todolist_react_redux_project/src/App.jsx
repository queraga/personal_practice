import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/slices/todosSlice";
import {
  Container,
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  Stack,
} from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const [text, setText] = useState("");

  const handleAddTd = (event) => {
    event.preventDefault();

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box component="form" onSubmit={handleAddTd} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Enter Todo here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            mt: 2,
            height: 44,
            bgcolor: "#2e7d32",
            "&:hover": { bgcolor: "#1b5e20" },
          }}
        >
          Add Todo
        </Button>
      </Box>

      <Paper
        elevation={1}
        sx={{
          maxWidth: 780,
          mx: "auto",
          p: 4,
          borderRadius: 2,
          border: "1px solid rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontFamily: "serif",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Todo List
        </Typography>
        {todos.length === 0 ? (
          <Typography sx={{ color: "grey", textAlign: "center", fontSize: 22 }}>
            No todos yet...
          </Typography>
        ) : (
          <List disablePadding>
            {todos.map((td, idx) => (
              <Box key={td.id}>
                <ListItem
                  sx={{
                    py: 2,
                    px: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 22,
                      textDecoration: td.completed ? "line-through" : "none",
                      opacity: td.completed ? 0.6 : 1,
                    }}
                  >
                    {td.title}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => dispatch(toggleTodo(td.id))}
                      sx={{
                        minWidth: 120,
                        bgcolor: "#1975b2",
                        "&:hover": { bgcolor: "#1565c0" },
                      }}
                    >
                      {td.completed ? "Undo" : "Complete"}
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => dispatch(deleteTodo(td.id))}
                      sx={{
                        minWidth: 110,
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </ListItem>

                {idx !== todos.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}

export default App;
