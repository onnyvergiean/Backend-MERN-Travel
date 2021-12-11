const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;
const bookingSchema = new Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: "Item",
        required: True,
      },
      price: {
        type: Number,
        required: True,
      },
      night: {
        type: Number,
        required: True,
      },
    },
  ],
  memberId: [
    {
      type: ObjectId,
      ref: "Member",
    },
  ],
  bankId: [
    {
      type: ObjectId,
      ref: "Bank",
    },
  ],
  proofPayment: {
    type: String,
    required: True,
  },
  bankFrom: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: True,
  },
});

module.exports = mongoose.model("Item", bookingSchema);
