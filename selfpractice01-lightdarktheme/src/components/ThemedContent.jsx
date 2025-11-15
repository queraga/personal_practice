import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

function ThemedContent() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`themeBox ${theme === "light" ? "lightBox" : "darkBox"}`}>
      <h2>{theme === "light" ? "Light mode" : "Dark mode"}</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default ThemedContent;
