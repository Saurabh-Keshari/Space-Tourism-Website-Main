import { NavLink } from "react-router-dom";
import Bar from "./Bar";

export default function Listitem({to, num, route}) {
  return (
    <>
      <li className="uppercase flex justify-between">
        <NavLink
          to={to}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <span className="font-bold mr-2">0{num}</span> {route}
        </NavLink>
        <Bar />
      </li>
    </>
  );
}
