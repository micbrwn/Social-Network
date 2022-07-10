const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        usernamer: {
            type: String,
            required: true,
        },
        reaction: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);



const Thought = model('thought', thoughtSchema);

module.exports = Thought;