import { Link } from "react-router-dom";
import { menu } from "../../../constants/variable";

const DrawerSide = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {menu.map((item) => {
          return (
            <li key={item.title}>
              <label htmlFor="side-menu">
              <Link
                className="text-gray-700 active:text-white dark:text-white"
                to={item.path}
              >
                {item.title}
              </Link>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DrawerSide;
