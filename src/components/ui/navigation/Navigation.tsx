import { Link } from "react-router-dom";

import Menu from "../../common/menu/Menu";
import DarkMode from "../../common/darkmode/DarkMode";
import SearchBar from "../../common/searchBar/SearchBar";
import Cart from "../../common/cart/Cart";
import SideMenuIcon from "../../common/sideMenuIcon/SideMenuIcon";

const Navigation = () => {
  return (
    <nav className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <SideMenuIcon />
      <div className="flex w-full xl:container xl:m-auto">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link to="/" className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
            React Shop
          </Link>
        </h1>
        <ul className="flex-none hidden md:flex md:flex-1 ml-2">
          <Menu />
        </ul>
        <div className="flex items-center px-2">
          <DarkMode />
          <SearchBar />
          <Cart/>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
