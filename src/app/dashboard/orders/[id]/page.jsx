import { updateOrder } from "@/app/lib/actions";
import { fetchOrder } from "@/app/lib/data";

const SingleOrderPage = async ({ params }) => {
  const { id } = params;
  const order = await fetchOrder(id);

  return (
    <div className="flex bg-blue-300 rounded-lg shadow-md lg:p-20 p-12 ml-[20%] lg:w-[70%] max-lg:ml-[30%] m-5">
      <div className="flex items-center justify-center "></div>
      <div className=" my-10">
        <h2 className="flex flex-col text-3xl my-5 font-bold">
          Order: {order.id}
        </h2>
        <form
          action={updateOrder}
          className="flex flex-col w-[100%] lg:w-[250%] lg:gap-6 gap-5 my-5"
        >
          <input type="hidden" name="id" value={order.id} />

          <div className="flex flex-col gap-2.5 ">
            <label className="font-semibold text-2xl mb-5">
              Items:
              {order.title
                .toString()
                .replace(/title|Items|[/[\]{}""]|[^\x20-\x7E]/g, "")}
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl ">
              Total sum:{order.price}$
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl">
              Stock:{order.stock}
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl">
              Email:{order.email}
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl">
              Address:{order.adress}
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl">Name:{order.name}</label>
          </div>
          <label className="font-semibold text-2xl">
            Pending: {order.isPending ? "Yes" : "No"}
          </label>
          <select
            id="isPending"
            name="isPending"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          >
            <option value={true}>{order.isPending ? "Yes" : "No"}</option>
            <option value={false}>{order.isPending ? "No" : "Yes"}</option>/
          </select>
          <label className="font-semibold text-2xl">
            Completed: {order.isCompleted ? "Yes" : "No"}
          </label>
          <select
            id="isCompleted"
            name="isCompleted"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          >
            <option value={false}>{order.isCompleted ? "Yes" : "No"}</option>
            <option value={true}>{order.isCompleted ? "No" : "Yes"}</option>/
          </select>
          <button className=" bg-purple-500 px-20 text-xl w-full items-start justify-start text-white rounded-full p-5 cursor-pointer mt-5 hover:bg-purple-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleOrderPage;
