import { Link } from "react-router-dom";
import { menu } from "../../../constants/variable";

const Menu = () => {
  return (
    <>
      {menu.map((item) => (
        <li key={item.title} className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};
export default Menu;
