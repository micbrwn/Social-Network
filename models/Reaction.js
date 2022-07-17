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
                type: Schema.Types.ObjectId,
                required: true,
            },
        createdAt: {
            type: Date,
            default: Date.now,
            get: getDate,
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
// reactionSchema.virtual('reactionCount').get(function () {
//     return this.reacitons.length;
// });

module.exports = reactionSchema;