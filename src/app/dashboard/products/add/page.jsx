"use client";
import { useFormState } from "react-dom";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  const [state, formAction] = useFormState(addProduct, undefined);
  return (
    <div className="bg-blue-300 rounded-lg shadow-md p-12 ml-[20%] lg:w-[50%] max-lg:ml-[30%] m-5">
      <h2 className="text-3xl font-semibold mb-8">Add New Product</h2>
      <form action={formAction} className="grid grid-cols-1 gap-6 ">
        <div className="">
          <label className="block text-gray-700 text-lg">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg">
            Price:
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-lg">
            Stock:
            <input
              type="number"
              id="stock"
              name="stock"
              placeholder="Stock"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-lg">
            Sizes(Optional):
          </label>
          <input
            type="text"
            id="size"
            name="size"
            placeholder="Size/s"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg">Category:</label>
          <select
            id="category"
            name="category"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          >
            <option value="food">Food</option>
            <option value="utility">Utility</option>
            <option value="clothes">Clothes</option>
          </select>
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 text-lg">
            Description:
          </label>
          <textarea
            id="desc"
            name="desc"
            rows="2"
            placeholder="Input a description here"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-teal-600 w-full text-white py-4 px-6 rounded-md text-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="text-xl mt-4 flex justify-center text-center">
        {state?.error}
      </div>
    </div>
  );
};

export default AddProductPage;
