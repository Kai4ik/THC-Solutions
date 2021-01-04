const mongoose = require("mongoose");
const Product = require("./products");

const userSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    inCartProducts: [
      {
        products: Product,
        qty: Number,
      },
    ],
  },
  { versionKey: "" }
);

module.exports = mongoose.model("User", userSchema);
