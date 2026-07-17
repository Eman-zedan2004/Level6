// @ts-nocheck
import { useParams } from "react-router-dom";
import { useGetOneProductByNameQuery } from "../../redux/ProductAPI";
import "./ProductDetails.css";
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import DetailsThumb from "./DetailsThumb";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import {
  decreaseQuantity,
  increaseQuantity,
  addProduct,
} from "../../redux/CartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

export default function ProductDetails() {
  let { id } = useParams();
  const parseID = Number(id);
  const { data, error, isLoading } = useGetOneProductByNameQuery(parseID);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);
  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.cartt,
  );
  const productQuantity = (item) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === item.id;
    });
    return myProduct.quantity;
  };

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

  if (!data) return null;

  if (data) {
    return (
      <div className="app details-page">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>

            {/* <Colors colors={data.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />

            {selectedProductsID.includes(data.id) ? (
              <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                <IconButton
                  sx={{ mr: "10px" }}
                  color="primary"
                  onClick={() => {
                    dispatch(decreaseQuantity(data));
                  }}
                >
                  <Remove fontSize="small" />
                </IconButton>

                <StyledBadge
                  badgeContent={productQuantity(data)}
                  color="primary"
                />

                <IconButton
                  sx={{ ml: "10px" }}
                  color="primary"
                  onClick={() => {
                    dispatch(increaseQuantity(data));
                  }}
                >
                  <Add fontSize="small" />
                </IconButton>
              </div>
            ) : (
              <Button
                className="cart"
                sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(addProduct(data));
                }}
              >
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
