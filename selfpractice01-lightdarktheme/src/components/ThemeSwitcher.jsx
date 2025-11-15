import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={`btnTheme ${theme === "light" ? "lightBtn" : "darkBtn"}`}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}

export default ThemeSwitcher;
