"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      className="duration-100 outline-0 rounded-full hover:cursor-pointer active:outline-0"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaMoon className="absolute h-12 w-12 -rotate-21 duration-300 scale-100 text-darkmode-bg-color dark:-rotate-0 dark:scale-0" />
      <IoSunny className="absolute h-12 w-12 -rotate-90 scale-0 dark:-rotate-22 duration-300 dark:scale-100" />
    </Button>
  );
}
