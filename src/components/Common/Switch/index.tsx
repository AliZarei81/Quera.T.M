import React from "react";
import { ReactComponent as Sun } from "./img/Sun.svg";
import { ReactComponent as Moon } from "./img/Moon.svg";
import "./style.css";

const Switch: React.FC = () => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <header className="App-header">
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          <Sun />
          <Moon />
        </label>
      </div>
    </header>
  );
};

export default Switch;
