import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/slices/todosSlice";

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
    <section>
      <form onSubmit={handleAddTd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <h2>Todo List</h2>
      <ul>
        {todos.map((td) => (
          <li key={td.id}>
            {td.title}
            <button type="button" onClick={() => dispatch(toggleTodo(td.id))}>
              {td.completed ? "Undo" : "Complete"}
            </button>
            <button type="button" onClick={() => dispatch(deleteTodo(td.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
