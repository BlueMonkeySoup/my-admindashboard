import React from "react";
import Link from "next/link";
import {
  BsFillJournalBookmarkFill,
  BsFilePersonFill,
  BsFillFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { handleLogout } from "../lib/actions";

const data = [
  {
    id: 1,
    title: "Users",
    sub: "Add user",
    redirect: "/dashboard/users",
    subredirect: "/dashboard/users/add",
    icons: <BsFilePersonFill />,
  },
  {
    id: 2,
    title: "Products",
    sub: "Add products",
    redirect: "/dashboard/products",
    subredirect: "/dashboard/products/add",
    icons: <BsFillJournalBookmarkFill />,
  },
  {
    id: 3,
    title: "Orders",
    redirect: "/dashboard/orders",
    icons: <BsFillFileEarmarkBarGraphFill />,
  },
];
const Links = () => {
  const user = "/";
  return (
    <div className="flex flex-col justify-between items-center h-full max-lg:w-1/4 w-1/6 top-0 left-0 bg-blue-400 absolute space-x-4 mb-[40rem] ">
      <div className="flex-col items-start justify-between mt-10">
        <img
          className="rounded-full "
          src={user.img || "/noavatar.png"}
          alt="avatar "
          width={40}
          height={40}
        ></img>
        <h1 className="flex-col text-2xl p-4 text-white overflow-hidden  overflow-ellipsis">
          {user.username || "Hello,world"}{" "}
        </h1>
        <span className="text-xl mt-20 p-4 text-gray-200 ">Admin</span>
        <ul>
          {data.map((items) => (
            <li key={items.id} className="p-1 mt-[5rem] space-x-4 ">
              <Link className="  flex" href={items.redirect}>
                <p className="text-2xl mt-2 mr-3">{items.icons}</p>
                <p className="text-4xl hover:text-white">{items.title}</p>
              </Link>
              <Link
                className="text-xl mt-10 hover:text-white"
                href={items.subredirect || ""}
              >
                {items.sub && <p>* {items.sub}</p>}
              </Link>
            </li>
          ))}
        </ul>
        <form action={handleLogout}>
          <button
            className="p-5 text-4xl mt-[15rem] hover:text-white"
            type="submit"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Links;
