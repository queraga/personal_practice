import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function Calculator() {
  const [number1, setNumber] = useState("");
  const [number2, setNumber] = useState("");
  const [result, setResult] = useState(null);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Simple Calculator
      </Typography>
    </Container>
  );
}

export default Calculator;
