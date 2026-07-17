// @ts-nocheck
import { useParams } from "react-router-dom";
import { useGetOneProductByNameQuery } from "../redux/ProductAPI";
import "./ProductDetails.css";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

export default function ProductDetails() {
  let {id} = useParams();
  const parseID = Number(id);
  const { data, error, isLoading } = useGetOneProductByNameQuery(parseID);

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

  if (!data) return null;

  if (data) {
    return <div>Data ID: {data.id}</div>;
  }
}
