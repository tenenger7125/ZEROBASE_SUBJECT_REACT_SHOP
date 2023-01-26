import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  const [isClick, setIsClick] = useState(false);

  const handleSearchClick = () => {
    setIsClick((prev) => !prev);
  }

  return (
    <div className="dropdown">
      <button type="button" className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search" onClick={handleSearchClick}>
        <HiOutlineSearch className="h-6 w-6 stroke-gray-700 dark:stroke-white" />
      </button>
      <input
        type="text"
        placeholder="검색"
        className={`fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput ${isClick ? 'translate-y-full !opacity-100' : '-z-10'}`}
      />
    </div>
  );
};
export default SearchBar;
