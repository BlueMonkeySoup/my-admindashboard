import { Product, User, Order } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();

    const count = await User.find({ username: { $regex: regex } }).count();
    console.log(count);
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    console.log(users);
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("failed to get user");
  }
};

export const fetchUser = async (id) => {
  console.log(id);

  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to get user");
  }
};
export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    console.log(products);
    return { products, count };
  } catch (err) {
    console.log(err);
    throw new Error("failed to get products");
  }
};

export const fetchProduct = async (id) => {
  console.log(id);

  try {
    connectToDB();

    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("failed to get product");
  }
};

export const fetchOrders = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const count = await Order.find({ title: { $regex: regex } }).count();
    const orders = await Order.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { products: orders, count };
  } catch (err) {
    console.log(err);
    throw new Error("failed to get products");
  }
};

export const fetchOrder = async (id) => {
  console.log(id);

  try {
    connectToDB();

    const order = await Order.findById(id);
    return order;
  } catch (err) {
    console.log(err);
    throw new Error("failed to get product");
  }
};
