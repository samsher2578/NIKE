import { headerLogo } from "../assets/images";
import { menu, cancel } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isNav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!isNav);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-end gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="hidden max-lg:block">
          {!isNav ? (
            <img src={cancel} alt="hamburger" width={23} height={23} />
          ) : (
            <img src={menu} alt="hamburger" width={25} height={25} />
          )}
        </div>
        <div
          className={
            !isNav
              ? "fixed left-0 top-0 w-3/5 h-full boredr-r border-r-gray-900 bg-Background px-4 ease-in-out duration-500 bg-black "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-Primary mt-8">
            <a href="">
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
          </h1>
          <ul className="pt-12 uppercase">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="p-4 border-b border-gray-600 font-montserrat info-text pb-2"
              >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
