const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: getDate,
    },
    usernamer: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function getDate(date) {
  return this.createdAt;
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
