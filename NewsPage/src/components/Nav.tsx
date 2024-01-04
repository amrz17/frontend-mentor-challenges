import { useState } from "react";
import { close, logo, menu } from "../assets/icons";
import { navLink } from "../constant";

export function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full absolute p-4 md:p-6 lg:p-8">
      <nav className="flex justify-between w-full max-container">
        <div className="md:ml-10 lg:ml-52">
          <img src={logo} />
        </div>
        <div className="md:flex hidden items-center list-none gap-8 md:mr-10 lg:mr-52">
          {navLink.map((link) => (
            <li
              key={link.label}
              className="text-xl text-Grayish-blue hover:text-Soft-red"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </div>
        <div className="flex md:hidden items-center">
          <img
            src={menu}
            width={55}
            onClick={(e) => {
              e.preventDefault();
              setOpenMenu((openMenu) => !openMenu);
            }}
          />
        </div>
        {openMenu && (
          <div className="flex-row absolute right-0 bg-white h-screen w-3/5 list-none">
            <div className="absolute right-0 mr-4">
              <img
                src={close}
                width={40}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu((openMenu) => !openMenu);
                }}
              />
            </div>
            <ul className="ml-10 mt-14 text-2xl">
              {navLink.map((link) => (
                <li key={link.label} className="py-5 hover:text-Soft-red">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
