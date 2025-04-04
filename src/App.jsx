import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
