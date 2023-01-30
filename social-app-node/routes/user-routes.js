//modules: require
const express = require("express");
const {
  index,
  show,
  store,
  update,
  destroy,
  follow,
  unfollow
} = require("../controllers/user-controller");
const User = require("../models/User");

//Router: instance
const router = express.Router();

// /**
//  * @method GET
//  * @controllerMethod index
//  */
// router.get("", index);

/**
 * @method GET
 * @param :id
 * @controllerMethod show
 */
router.get("/", show);

// /**
//  * @method POST
//  * @controllerMethod store
//  */
// router.post("", [], store);

/**
 * @method PUT
 * @param :id
 * @controllerMethod update
 */
router.put("/:id", [], update);

/**
 * @method DELETE
 * @param :id
 * @controllerMethod destroy
 */
router.delete("/:id", destroy);

/**
 * @method PUT
 * @param :id
 * @controllerMethod follow
 */
router.put("/:id/follow", follow);

/**
 * @method PUT
 * @param :id
 * @controllerMethod unfollow
 */
router.put("/:id/unfollow", unfollow);

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profile_picture } = friend;
      friendList.push({ _id, username, profile_picture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
});

//module: export
module.exports = router;