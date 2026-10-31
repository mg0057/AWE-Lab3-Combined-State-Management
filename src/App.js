
import React, { useContext } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { UserProvider } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

import Login from "./components/Login";
import Counter from "./components/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher";

import "./App.css";

function MainContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>SED-312 Lab 03</h1>
      <ThemeSwitcher />
      <Login />
      <Counter />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          <MainContent />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
