import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import ThemedContent from "./components/ThemedContent";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemeSwitcher />
        <ThemedContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
