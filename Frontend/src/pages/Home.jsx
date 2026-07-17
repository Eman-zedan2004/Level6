// @ts-nocheck
import {
  Typography,
  Button,
  Stack,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetProductByNameQuery } from "../redux/ProductAPI";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/CartSlice";
import { Add, Remove } from "@mui/icons-material";
import { decreaseQuantity, increaseQuantity } from "../redux/CartSlice";
import { styled, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

export default function Home() {
  const { data, error, isLoading } = useGetProductByNameQuery();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.cartt,
  );
  const productQuantity = (item) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === item.id;
    });
    return myProduct.quantity;
  };
  const navigate = useNavigate();

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 10, p: 3 }}>
        <Typography variant="h5" color="error" sx={{ mb: 1 }}>
          Sorry, there was an error on loading the data!
        </Typography>
        <Typography sx={{ mb: 3 }} variant="body1" color="text.secondary">
          {error?.data?.message ||
            "Please check your internet connection or try again later."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Try again
        </Button>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress size="3rem" aria-label="Loading…" />
      </Box>
    );
  }

  if (data) {
    return (
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((item, index) => {
          return (
            <Card
              className="card"
              key={item.id}
              sx={{
                maxWidth: 277,
                mb: 6,
                mx: 2,
              }}
            >
              <CardMedia
                component="img"
                height="277"
                image={item.imageLink}
                alt="Paella dish"
                onClick={() => {
                navigate(`product-details/${item.id}`)
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between" }}
                disableSpacing
              >
                {selectedProductsID.includes(item.id) ? (
                  <div
                    dir="rtl"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconButton
                      sx={{ ml: "10px" }}
                      color="primary"
                      onClick={() => {
                        dispatch(increaseQuantity(item));
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>

                    <StyledBadge
                      badgeContent={productQuantity(item)}
                      color="primary"
                    />

                    <IconButton
                      sx={{ mr: "10px" }}
                      color="primary"
                      onClick={() => {
                        dispatch(decreaseQuantity(item));
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  <Button
                    sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(addProduct(item));
                    }}
                  >
                    Add to cart
                  </Button>
                )}

                <Typography
                  sx={{ mr: 1 }}
                  variant="body1"
                  color={theme.palette.error.light}
                >
                  ${item.price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
}
