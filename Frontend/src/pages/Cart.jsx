// @ts-nocheck
import {
  Box,
  Button,
  Paper,
  styled,
  IconButton,
  Badge,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

export default function Card() {
  const { selectedProducts } = useSelector((state) => state.cartt);
  const dispatch = useDispatch();

  return (
    <Box>
      {selectedProducts.map((item) => {
        return (
          <Paper dir="rtl" className="item-container">
            <div className="img-title-parent">
              <img
                src={item.imageLink}
                alt=""
              />
              <p className="product-name">{item.productName}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{ color: "#1976d2", ml: "10px" }}
                onClick={() => {}}
              >
                <Add />
              </IconButton>

              <StyledBadge badgeContent={1} color="secondary" />

              <IconButton
                sx={{ color: "#1976d2", mr: "10px" }}
                onClick={() => {}}
              >
                <Remove />
              </IconButton>
            </div>

            <div className="price">${item.price}</div>

            <Button
              sx={{ display: { xs: "none", md: "inline-flex" } }}
              variant="text"
              color="error"
            >
              delete
            </Button>

            <IconButton
              sx={{
                color: "#ef5350",
                display: { xs: "inline-flex", md: "none" },
              }}
              onClick={() => {}}
            >
              <Delete />
            </IconButton>
          </Paper>
        );
      })}

      <Paper sx={{ width: "200px", mx: "auto", mt: "60px" }}>
        <Typography sx={{ align: "center", p: 2 }} variant="h6">
          Cart Summary
        </Typography>

        <Divider />

        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">$100</Typography>
        </Stack>

        <Divider />

        <Button fullWidth color="primary" variant="contained">
          CHECKOUT
        </Button>
      </Paper>
    </Box>
  );
}
