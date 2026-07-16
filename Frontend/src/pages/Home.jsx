// @ts-nocheck
import {
  Typography,
  Button,
  Stack,
  Box,
  CircularProgress,
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

export default function Home() {
  const { data, error, isLoading } = useGetProductByNameQuery("bulbasaur");
  const theme = useTheme();
  const dispatch = useDispatch();

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
        {data.map((item) => {
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
