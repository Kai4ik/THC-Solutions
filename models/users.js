const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    cartProducts: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        qty: Number,
      },
    ],
    wishlistProducts: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
  },
  { versionKey: "" }
);

module.exports = mongoose.model("User", userSchema);
