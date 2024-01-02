import { close } from "../assets/icons";
import { navLink } from "../constant";

export function SideBar() {
  return (
    <div className="flex-row absolute right-0 bg-white h-screen w-3/5 list-none">
      <div className="absolute right-0 mr-4">
        <img src={close} width={40} />
      </div>
      <ul className="ml-8 mt-12 text-xl">
        {navLink.map((link) => (
          <li key={link.label} className="py-5">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
