const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    text: { type: String, required: true, maxLength: 100 },
    timestamp: { type: Date, required: true, default: Date.now },
    username: { type: String, required: true, maxLength: 100 },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

CommentSchema.virtual("date").get(function () {
  return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_SHORT);
});
module.exports = mongoose.model("Comment", CommentSchema);
