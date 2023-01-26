import { Link } from "react-router-dom";

import { usdCurrencyFormat } from "../../../utils/currency";
import { addCart } from "../../../utils/cartUtils";
import Rating from "../../common/rating/Rating";

const ProductDetail = ({ data }: ProductItem) => {
  const handleAddCartClick = () => {
    addCart({ id: data.id, count: 1 });
  };

  return (
    <>
      {
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img src={data.image} alt={data.title} className="object-contain w-full h-72" />
          </figure>
          <div className="card-body px-1 lg:px-12 text-gray-800 dark:text-gray-100">
            <h2 className="card-title">
              {data.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{data.description}</p>
            <Rating rate={data.rating.rate} count={data.rating.count} />
            <p className="mt-2 mb-4 text-3xl"> {usdCurrencyFormat(data.price)}</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleAddCartClick}>
                장바구니에 담기
              </button>
              <Link className="btn btn-outline ml-1" to={"/cart"}>
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default ProductDetail;
