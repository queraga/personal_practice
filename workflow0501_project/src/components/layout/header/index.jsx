import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const cartCount = 0;

  return (
    <AppBar position="static" sx={{ bgcolor: "#3B3C3D" }}>
      <Toolbar
        disableGutters
        sx={{
          height: "110px",
          px: "250px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", color: "white" }}>
          Sneaker Shop
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            "& button": {
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.5)",
              textTransform: "none",
              "&:hover": {
                color: "#fff",
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <Button>Main</Button>
          <Button>Basket</Button>
          <Button>Contacts</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
