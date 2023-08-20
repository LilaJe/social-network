const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 250,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use the get method
      get: (timeStamp) => dateFormat(timeStamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
