import React from "react";
import { Button } from "../../ui/button";
import { useTheme } from "../../../hooks/useTheme";

const Header: React.FC = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex border-b border-input p-4 justify-between items-center">
      <h1 className="text-foreground">Hours Tracker</h1>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
};

export default Header;
