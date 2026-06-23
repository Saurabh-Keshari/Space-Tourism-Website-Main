import { Link } from "react-router-dom";
import Bar from "./Bar";

export default function Listitem({to, num, route, handleBar}) {
  return (
    <>
      <li className="uppercase flex justify-between" onClick={handleBar}>
        <Link
          to={to}
          className="text-white items-center"
        >
          <span className="font-bold mr-2">0{num}</span> {route}
        </Link>
        <Bar />
      </li>
    </>
  );
}
