const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
    profile_picture: {
      type: String,
      default: ""
    },
    cover_picture: {
      type: String,
      default: ""
    },
    followers: {
      type: Array,
      default: []
    },
    followings: {
      type: Array,
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    city: {
      type: String,
      max: 50
    },
    from: {
      type: String,
      max: 50
    },
    relationship: {
      type: Number,
      enum: [1, 2]
    },
    description: {
      type: String
    }
    // verification_code: {
    //   type: String,
    //   required: false,
    // },
    // reset_code: {
    //   type: String,
    //   required: false,
    // },
    // verified: {
    //   type: Boolean,
    //   default: false,
    //   required: false,
    // },
    // notes: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Note",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);