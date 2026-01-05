import { Container, Box, Typography } from "@mui/material";
import mainPageBanner from "../assets/mainPageBanner.png";

function MainPage() {
  return (
    <Container>
      <Box
        component="img"
        src={mainPageBanner}
        alt="Promo Banner"
        sx={{
          width: "100%",
          maxWidth: "1120px",
          display: "block",
          mx: "auto",
          borderRadius: "4px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      />
      <Typography sx={{ mt: 4, fontSize: "36px", fontWeight: "700" }}>
        Products
      </Typography>
    </Container>
  );
}

export default MainPage;
