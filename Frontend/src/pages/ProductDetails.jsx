import { useGetOneProductByNameQuery } from "../redux/ProductAPI";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { data, error, isLoading } = useGetOneProductByNameQuery(1);

  return <div></div>;
}
