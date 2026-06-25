import { NavLink } from "react-router-dom";

export default function Listitem({to, num, route, onClick}) {
  return (
    <>
      <li className="uppercase flex justify-between">
        <NavLink
          to={to}
          onClick={onClick}
          className={({ isActive }) => `lg:border-b-4 transition-colors duration-200 ${isActive ? "active" : "border-transparent hover:border-white/50"}`}
        >
          <span className="font-bold mr-2">0{num}</span> {route}
        </NavLink>
      </li>
    </>
  );
}
