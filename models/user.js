const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is Required',
            trim: true
        },

        email: {
            type: String,
            required: 'Email is Required',
            unique: true,
            validate: {
                validator(validEmail) {
                    return /$/i.test(validEmail);
                },
            }
        },

        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    }
);

friends: {
    type: Schema.Types.ObjectId,
        ref: 'User'
}

const User = model('User', userSchema);

module.exports = User;
