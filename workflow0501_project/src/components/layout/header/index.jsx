import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

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
            "& .MuiButton-root": {
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.5)",
              textTransform: "none",
            },
            "& .MuiButton-root:hover": {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "transparent",
            },
            "& .MuiButton-root.active": {
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <Button component={NavLink} to="/">
            Main
          </Button>
          <Button component={NavLink} to="/basket">
            Basket
          </Button>
          <Button component={NavLink} to="/contacts">
            Contacts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
