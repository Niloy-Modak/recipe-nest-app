import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const themes = ["light", "dark"]; // You can expand this list

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <button
      className="mr-4"
      onClick={toggleTheme}
    >
      {theme === "light" ?  <MdOutlineWbSunny size={25}/>: <IoMoonOutline size={25}/>} 
    </button>
  );
}