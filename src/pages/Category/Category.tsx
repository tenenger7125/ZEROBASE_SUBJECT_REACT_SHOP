import { useLocation } from "react-router-dom";

import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import ProductPreview from "../../components/ui/productPreview/ProductPreview";
import { useAppSelector } from "../../hooks/reduxtoolkit";
import { ShopState } from "../../store/slice/shopSlice";
import { pathnameToBreadCrumb, pathnameToTitle, pathnameToCategory } from "../../utils/pathnameUtils";

const Category = () => {
  const { pathname } = useLocation();
  const data = useAppSelector((state) => state.shopSlice[pathnameToCategory(pathname) as keyof ShopState]);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb bread={pathnameToBreadCrumb(pathname)} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ProductPreview data={data} title={pathnameToTitle(pathname)} />
      </article>
    </section>
  );
};
export default Category;
