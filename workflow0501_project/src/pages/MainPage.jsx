import { Container, Box, Typography, Divider } from "@mui/material";
import mainPageBanner from "../assets/mainPageBanner.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { useSelector } from "react-redux";
import ProductCard from "../components/layout/productCard/index";
import { Grid } from "@mui/material";
import { addToCart } from "../store/cartSlice";

function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    fetch("https://691226d852a60f10c820ceee.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box
      sx={{
        py: 4,
      }}
    >
      <Container>
        <Box
          component="img"
          src={mainPageBanner}
          alt="Promo Banner"
          sx={{
            width: "100%",
            display: "block",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        />
        <Typography sx={{ mt: 4, fontSize: "36px", fontWeight: "700" }}>
          Products
        </Typography>
        <Divider
          sx={{
            mt: 2,
            mb: 4,
            borderColor: "rgba(0,0,0,0.1)",
          }}
        />
        <Grid container spacing={5} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} md={3}>
              <ProductCard product={product} onAdd={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MainPage;
