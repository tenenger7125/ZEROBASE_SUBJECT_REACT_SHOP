import { FiSun, FiMoon } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from './../../../hooks/reduxtoolkit';
import { initIsDark } from "../../../store/slice/shopSlice";
import { setDarkMode } from "../../../utils/darkmode";
import { setLocalStorage } from "../../../utils/localStorage";

const DarkMode = () => {
  const dispatch = useAppDispatch()
  const isDark = useAppSelector(state => state.shopSlice.isDark)
  
  const handleModeChange = () => {
    setDarkMode(!isDark);
    dispatch(initIsDark(!isDark))
    setLocalStorage('isDark', `${!isDark}`)
  }
  return (
    <label className="swap swap-rotate mr-2 sm:mr-4">
      <input type="checkbox" className="js-theme" onChange={handleModeChange} checked={isDark}/>
      <FiSun className="swap-off text-black w-7 h-7" />
      <FiMoon className="swap-on text-white w-7 h-7" />
    </label>
  );
};
export default DarkMode;
