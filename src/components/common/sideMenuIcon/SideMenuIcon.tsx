import { FiMenu } from "react-icons/fi";

const SideMenuIcon = () => {

  return (
    <label htmlFor='side-menu' className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
      <FiMenu className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current" />
    </label>
  );
};
export default SideMenuIcon;
