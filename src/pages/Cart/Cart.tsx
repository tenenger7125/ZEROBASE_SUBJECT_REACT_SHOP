import { Link, useLocation } from "react-router-dom";

import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import Modal from "../../components/common/modal/Modal";
import { pathnameToBreadCrumb } from "../../utils/pathnameUtils";
import { clearLocalStorage } from "./../../utils/localStorage";

const Cart = () => {
  const { pathname } = useLocation();

  const handleRemoveCartClick = () => {
    clearLocalStorage("cart-item");
  };

  return (
    <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb bread={pathnameToBreadCrumb(pathname)} />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div>
          <h1 className="text-2xl mb-10">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary">
            담으러 가기
          </Link>
        </div>
      </div>
      <div className="lg:flex justify-end mb-20">
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <div className="text-xl md:text-2xl">
            <span>총:</span>
            <span>$0</span>
          </div>
          <label htmlFor="purchase-modal" className="btn btn-primary ml-5">
            구매하기
          </label>
        </div>
      </div>
      <Modal activeFunction={handleRemoveCartClick} />
    </div>
  );
};
export default Cart;
