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
      // get: createdAt,
    },
    username: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user"
    },
    reactions: [
      Reaction
    ],
  },
  {
    toJSON: {
      virtuals: true,
     getters: true,
    },
    id: false,
  }
);

// function getDate(createdAt) {
//  return createdAt;
// }

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
