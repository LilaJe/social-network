const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent thought _id !!
        reactionId: {
            type: Schema.Types.ObjectId,
            default:
                () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use a getter method to format the timestamp on query. 
            get: timeStamp => dateFormat(timeStamp)
        }
    },
    
    toJSON: {
        getters: true
    }
);
