import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
    type: String,
    unique: [true, 'Email already exist!'],
    required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,'Username invalid, it should contain 8-20 alphanumeric letters and be unique!']
    },
    image: {
        type: String
    }
})

const User = models.User || model("User",UserSchema);
// models.User is toi check if theres a model called User and || is a or operator
// i.e if models.User doesnt exist, model("User",Userschema) {create a model called User with the scheme/options of Userschema}

export default User