import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 bg-[#F9FAFB] shadow md:mb-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-5 md:px-2">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
