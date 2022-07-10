const Thought = require('./Thought');
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema,
                ref: lashdf
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);




const User = model('user', userSchema);

module.exports = User;