import { useLocation, useParams } from "react-router-dom";

import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import ProductSkeleton from "../../components/common/productSkeleton/ProductSkeleton";
import ProductDetail from "../../components/ui/productDetail/ProductDetail";
import { useAppSelector } from "../../hooks/reduxtoolkit";
import { pathnameToBreadCrumb } from "../../utils/pathnameUtils";
import { filterItem } from "../../utils/productUtils";

const Product = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const rawData = useAppSelector((state) => state.shopSlice.rawProductData);
  const item = filterItem(rawData, id);

  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto mb-auto'>
      {item ? (
        <>
          <Breadcrumb bread={[pathnameToBreadCrumb(pathname), item.title]} />
          <ProductDetail data={item} />
        </>
      ) : (
        <ProductSkeleton limit={1} />
      )}
    </section>
  );
};
export default Product;
