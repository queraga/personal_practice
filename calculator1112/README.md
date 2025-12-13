# Simple Calculator (React + Material UI)

A simple calculator built with React and Material UI.  
It allows you to enter two numbers and perform basic operations: add, subtract, multiply, divide.

## Tech stack
- React
- Material UI (@mui/material)
- Emotion (@emotion/react, @emotion/styled)

## Features
- Two numeric inputs
- Four operations: +, -, x, /
- Result shown below after clicking an operation button
- Responsive layout with MUI Container, TextField, Button, Typography

## How to run locally
1. Install dependencies:
   npm install

2. Start the project:
   npm start

## Project structure
src/
- components/
  - Calculator.js
- App.js

## Notes
- Division by zero should be handled (show an error or a special message).