const mongoose = require("mongoose");
const { Schema } = mongoose;
const { objectId } = Schema;
const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  itemId: {
    type: ObjectId,
    ref: Item,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
