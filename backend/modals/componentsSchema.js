const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema(
  {
    name: {
      type: String,
      // unique: true,
      required: [true, "name should not be empty"],
    },
    companyName: String,
    process: [
      {
        processName: String,
      },
    ],

    batches: [
      {
        batchName: { type: String },
        progress: String,
        remaining: Number,
        completed: Number,
        issuedQuantityB: {
          type: Number,
          default: 0,
        },
        process: [
          {
            processName: String,
            accepted: Number,
            rejected: Number,
            issuedQuantity: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", componentSchema);
