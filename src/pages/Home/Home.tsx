import { Link } from "react-router-dom";

import Slider from "../../components/common/slider/Slider";
import ProductPreview from "../../components/ui/productPreview/ProductPreview";
import { useAppSelector } from "../../hooks/reduxtoolkit";

const Home = () => {
  const fashion = useAppSelector((state) => state.shopSlice.fashion);
  const accessory = useAppSelector((state) => state.shopSlice.accessory);
  const digital = useAppSelector((state) => state.shopSlice.digital);

  return (
    <>
      <Slider />
      <ProductPreview data={fashion} title="패션"/>
      <ProductPreview data={accessory} title="액세서리"/>
      <ProductPreview data={digital} title="디지털"/>
    </>
  );
};
export default Home;
