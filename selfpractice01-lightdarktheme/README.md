🌗 Theme Context Switcher

A simple React application demonstrating how to switch between Light and Dark themes using React Context.

📌 Features
• Global theme management using Context API
• One-click theme toggle button
• Dynamic styling based on selected theme
• Clean and minimal component structure

⸻

📁 Project Structure

```
src/
│
├── components/
│   ├── ThemeProvider.jsx      # Provides global theme context
│   ├── ThemeSwitcher.jsx      # Button to toggle theme
│   └── ThemedContent.jsx      # Content styled based on active theme
│
├── App.jsx                    # Main app file
└── App.css                    # Basic global styling

```

## 🧠 What I Learned

- How to create and export a **Context** (`createContext`)
- How to build a **Provider** component that:
  - stores state with `useState`
  - passes state and actions through `value`
- How to consume context in child components with `useContext`
- How to toggle state using a **functional updater**:
  - `setTheme(prev => (prev === "light" ? "dark" : "light"))`
- How to structure a tiny app where **Provider wraps the whole UI**

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany
