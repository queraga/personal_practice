import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const toNumber = (value) => Number(value);

  const add = () => setResult(toNumber(number1) + toNumber(number2));
  const sub = () => setResult(toNumber(number1) - toNumber(number2));
  const mul = () => setResult(toNumber(number1) * toNumber(number2));
  const div = () => {
    const divisor = toNumber(number2);
    if (divisor === 0) {
      setResult("Operation failed");
      return;
    }
    setResult(toNumber(number1) / divisor);
    console.log("works");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Simple Calculator
      </Typography>
      <TextField
        label="First number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={number1}
        onChange={handleNumber1Change}
        type="number"
      />
      <TextField
        label="Second number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={number2}
        onChange={handleNumber2Change}
        type="number"
      />
      <Button variant="contained" onClick={add} fullWidth sx={{ mt: 3 }}>
        +
      </Button>
      <Button variant="contained" onClick={sub} fullWidth sx={{ mt: 1 }}>
        -
      </Button>
      <Button variant="contained" onClick={mul} fullWidth sx={{ mt: 1 }}>
        *
      </Button>
      <Button variant="contained" onClick={div} fullWidth sx={{ mt: 1 }}>
        /
      </Button>

      {result !== null && (
        <Typography variant="h5" sx={{ mt: 3 }}>
          Result: {result}
        </Typography>
      )}
    </Container>
  );
}

export default Calculator;
