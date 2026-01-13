# Todo List (Redux Toolkit + Material UI)

A simple Todo List app built with React.  
State management is implemented with Redux Toolkit. UI is styled with Material UI.

## Features

- Add new todos
- Mark todo as completed / undo
- Delete todos
- Shows an empty state message: **"No todos yet..."** when the list is empty

## Tech Stack

- React
- Redux Toolkit
- React Redux
- Material UI (MUI)

## Project Structure (basic)

    •	src/redux/slices/todosSlice.js - todos slice (add / toggle / delete)
    •	src/redux/store.js - Redux store setup
    •	src/App.jsx - main UI + logic

## Notes

    •	The project uses Redux Toolkit reducers with immutable updates handled by Immer under the hood.
    •	Styling is done with Material UI components and sx props.
