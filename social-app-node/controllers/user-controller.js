const User = require("../models/User");
const bcrypt = require("bcrypt");

// exports.index = async (req, res) => {
//   let response = await User.find();
//   res.status(200).json({ status: true, data: response });
// };

exports.show = async (req, res) => {
  try {
    let response = await User.findById(req.params.id);
    return res.status(200).json({ status: true, data: response });
  } catch (error) {
    return res
      .status(404)
      .json({ status: false, message: "Document not found!" });
    // throw new HttpError(404, "Document Not Found!");
  }
};

// exports.store = async (req, res) => {

//   //1000-9999 || 0000<=>9999
//   let randomNumber = Math.random() * 10000;
//   let verification_code = Math.round(randomNumber);

//   let hashedPassword = await bcrypt.hash(req.body.password, 12);
//   let hashedVerificationCode = await bcrypt.hash(verification_code.toString(), 12);

//   //Integration with
//   //1) Email 2) SMS Provider

//   let result = await User.insertMany({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword,
//     verification_code: hashedVerificationCode
//   });
//   res.status(201).json({
//     status: true,
//     message: "Success",
//     data: result,
//     verification_code: verification_code,
//   });
// };

exports.update = async (req, res) => {
  try {
    let response = await User.findOne({ _id: req.params.id });
    if (response != null) {
      if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
          const newHashedPass = bcrypt.hashSync(req.body.password);
          req.body.password = newHashedPass;
        }
        let result = await User.updateOne(
          { _id: req.params.id },
          {
            $set: req.body,
          }
        );
        return res.status(200).json({
          status: true,
          message: "Account has been updated successfully!",
        });
      }
      return res
        .status(403)
        .json({ status: false, message: "You can update only your account" });
    }
    return res
      .status(404)
      .json({ status: false, message: "User was not found!" });
  } catch (error) {
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    let response = await User.findOne({ _id: req.params.id });
    if (response != null) {
      if (req.body.userId === req.params.id || req.body.isAdmin) {
        let result = await User.deleteOne({ _id: req.params.id });
        return res.status(200).json({
          status: true,
          message: "Account has been deleted successfully!",
          response: response,
        });
      }
      return res
        .status(403)
        .json({ status: false, message: "You can delete only your account" });
    }
    return res
      .status(404)
      .json({ status: false, message: "User was not found!" });
  } catch (error) {
    console.log(error);
  }
};

//follow a user
exports.follow = async (req, res) => {
  try {
    let targetUser = await User.findOne({ _id: req.params.id });
    if (targetUser != null) {
      if (req.body.userId !== req.params.id) {
        let currentUser = await User.findOne({ _id: req.body.userId });
        if (!targetUser.followers.includes(req.body.userId)) {
          await targetUser.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          return res.status(200).json({
            status: true,
            message: "User has been followed successfully.",
          });
        }
        return res.status(400).json({
          status: false,
          message: "You already followed this user!",
        });
      }
      return res
        .status(403)
        .json({ status: false, message: "You can't follow yourself...'" });
    }
    return res
      .status(404)
      .json({ status: false, message: "User was not found!" });
  } catch (error) {
    console.log(error);
  }
};

//unfollow a user
exports.unfollow = async (req, res) => {
  try {
    let targetUser = await User.findOne({ _id: req.params.id });
    if (targetUser != null) {
      if (req.body.userId !== req.params.id) {
        let currentUser = await User.findOne({ _id: req.body.userId });
        if (targetUser.followers.includes(req.body.userId)) {
          await targetUser.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          return res.status(200).json({
            status: true,
            message: "User has been unfollowed successfully.",
          });
        }
        return res.status(400).json({
          status: false,
          message: "You are not following this user!",
        });
      }
      return res
        .status(403)
        .json({ status: false, message: "You can't unfollow yourself...'" });
    }
    return res
      .status(404)
      .json({ status: false, message: "User was not found!" });
  } catch (error) {
    console.log(error);
  }
};