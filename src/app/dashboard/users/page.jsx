import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import { fetchUsers, deleteUser } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Users = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(query, page);

  console.log(users);
  return (
    <div className="p-10 mt-20 rounded-md w-[70%] lg:ml-[20%] max-lg:ml-[30%] bg-blue-800 max-lg:text-xl lg:text-2xl">
      <div className="flex items-center justify-between ">
        <Search />
        <Link href="/dashboard/users/add">
          <button className="px-12 py-6 mb-10 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-xl margin border-collapse max-lg:text-xl lg:text-2xl ">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Created At</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center g-10 space-x-4">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className="flex gap-7">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className=" text-base text-gray-200 bg-green-600 cursor-pointer rounded-lg shadow-md mb-4 p-4 hover:bg-green-800 lg:text-lg">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className=" text-base bg-red-600 cursor-pointer rounded-lg shadow-md p-4 hover:bg-red-800">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
