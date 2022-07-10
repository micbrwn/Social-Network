const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlegnth: 280,
        },
        username: {
                type: String,
                required: true,
            },
        createdAt: {
            type: Date,
            default: Date.now,
            get: GeDate,
        }
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

function getDate(date) {
    return date;
}

module.exports = reactionSchema;