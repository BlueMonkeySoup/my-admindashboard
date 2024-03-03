import Link from "next/link";
import React from "react";
import { fetchOrders, fetchProducts, fetchUsers } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";

const Products = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(query, page);

  console.log(products);
  return (
    <div className="p-10 mt-20 rounded-md w-[70%] lg:ml-[20%] max-lg:ml-[30%] bg-blue-800 max-lg:text-xl lg:text-2xl">
      <div className="flex items-center justify-between ">
        <Search />
        <Link href="/dashboard/products/add">
          <button className="px-12 py-6 mb-10 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-xl margin border-collapse max-lg:text-xl lg:text-2xl ">
        <thead>
          <tr className="border-b ">
            <th className="py-2 px-2 text-left ">Title</th>
            <th className="py-2 px-2 text-left ">Price</th>
            <th className="py-2 px-4 text-left">Created At</th>
            <th className="py-2 px-4 text-left">Stock</th>
            {/* <th className="py-2 px-4 text-left">Info</th> */}
            <th className="py-2 px-4 text-left">Actions</th>
            <th className=" p-8"></th>
          </tr>
        </thead>
        <tbody className=" text-gray-300">
          {products.map((product) => (
            <tr key={product.id}>
              <script></script>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-8">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className=" text-base text-gray-200 bg-green-600 cursor-pointer rounded-lg shadow-md mb-4 p-4 hover:bg-green-800 lg:text-lg">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className=" text-base text-gray-200 bg-red-600 cursor-pointer rounded-lg shadow-md p-4 hover:bg-red-800">
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

export default Products;
