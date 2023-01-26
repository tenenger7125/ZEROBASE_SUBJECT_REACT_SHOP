import { useEffect } from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/ui/navigation/Navigation";
import Footer from "./components/ui/footer/Footer";

import { menu } from "./constants/variable";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

import { useAppDispatch } from "./hooks/reduxtoolkit";
import { getProductData, initIsDark } from "./store/slice/shopSlice";
import { getIsDark, setDarkMode } from "./utils/darkmode";

import { SRoutes } from "./styles/app.style";
import DrawerSide from "./components/common/drawerSide/DrawerSide";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDark = getIsDark();

    setDarkMode(isDark);
    dispatch(initIsDark(isDark));
    dispatch(getProductData());
  }, []);

  return (
    <>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Navigation />
        <SRoutes className="pt-16 main">
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {menu.map((item) => (
            <Route key={item.title} path={item.path} element={<Category />} />
          ))}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </SRoutes>
        <Footer />
      </section>
      <DrawerSide />
    </>
  );
}

export default App;
