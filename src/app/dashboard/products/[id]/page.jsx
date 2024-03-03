import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex bg-blue-300 rounded-lg shadow-md lg:p-20 p-12 ml-[20%] lg:w-[70%] max-lg:ml-[30%] m-5">
      <div className="flex flex-col items-center w-[40%]">
        <Image
          src={"/noavatar.png"}
          // src={ user.img || "/noavatar.png"}
          alt="User Avatar"
          className="h-96 lg:h-[30rem] lg:w-[25rem] rounded-lg object-cover mt-12"
          width={200}
          height={200}
        />
        <h2 className="flex flex-col text-3xl mt-5 font-bold">
          {product.username}
        </h2>
      </div>
      <div className="flex items-center justify-between"></div>
      <div>
        <form
          action={updateProduct}
          className="flex flex-col w-[120%] lg:w-[250%] ml-[20%] lg:gap-6 gap-2.5 mt-5"
        >
          <input type="hidden" name="id" value={product.id} />
          <div className="flex flex-col gap-1 ">
            <label className="font-semibold text-lg">Username</label>
            <input
              type="text"
              name="username"
              placeholder={product.username}
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-lg">Email</label>
            <input
              type="email"
              name="email"
              placeholder={product.email}
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-lg">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-lg">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={product.phone}
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-lg">Address</label>
            <textarea
              type="text"
              name="address"
              placeholder={product.address}
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-lg">Is Admin?</label>
            <select
              name="isAdmin"
              id="isAdmin"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value={true} selected={product.isAdmin}>
                Yes
              </option>
              <option value={false} selected={!product.isAdmin}>
                No
              </option>
            </select>
          </div>
          <button className=" bg-purple-500 px-20 text-xl w-full items-start justify-start text-white rounded-full p-5 cursor-pointer mt-5 hover:bg-purple-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
