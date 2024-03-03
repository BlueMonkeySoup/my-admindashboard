"use client";
import { addUser } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const AddUserPage = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div className="bg-blue-300 rounded-lg shadow-md p-12 ml-[20%] lg:w-[50%] max-lg:ml-[30%] m-5">
      <h2 className="text-3xl font-semibold mb-8">Add New User</h2>
      <form action={formAction} className="grid grid-cols-1 gap-6 ">
        <div className="">
          <label className="block text-gray-700 text-lg">Full Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-lg">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-md text-lg"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-lg">Phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg">Adress:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="Adress"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg">Admin Status:</label>
          <select
            id="isAdmin"
            name="isAdmin"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 text-lg">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            placeholder="Address"
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

export default AddUserPage;
