import { Link } from "react-router-dom";

import { usdCurrencyFormat } from "../../../utils/currency";
import ProductSkeleton from "../productSkeleton/ProductSkeleton";

const Products = ({ data, limit }: ProductsType) => {
  return (
    <>
      {data.length > 0 ?
        data.slice(0, limit).map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal">
            <figure className="flex h-80 bg-white overflow-hidden">
              <img
                src={item.image}
                alt={item.description}
                className=" transition-transform duration-300"
              />
            </figure>
            <figcaption className="card-body bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-b-2xl">
              <p className="card-title text-base">{item.title}</p>
              <p className="text-base">{usdCurrencyFormat(item.price)}</p>
            </figcaption>
          </Link>
        )) : <ProductSkeleton limit={limit} />}
    </>
  );
};
export default Products;
