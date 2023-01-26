import axios from "axios";
import { PRODUCT_DATA_URL } from "../constants/variable";

export const fetchProducts = async () => {
  const res = await axios(PRODUCT_DATA_URL);
  const data = await res.data;
  return data;
};
