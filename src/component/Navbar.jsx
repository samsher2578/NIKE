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

        <div onClick={handleNav} className="block md:hidden">
          {!isNav ? (
            <img src={cancel} alt="close" width={23} height={23} />
          ) : (
            <img src={menu} alt="menu" width={25} height={25} />
          )}
        </div>
        <div
          className={
            !isNav
              ? "fixed left-0 top-0 w-3/5 h-full bg-black boredr-r border-slate-900 text-slate-gray px-8 ease-in-out duration-500 z-10"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold mt-8">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </h1>
          <ul className="pt-16 uppercase">
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
