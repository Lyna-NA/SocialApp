const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  secret: {
    type: Schema.Types.String,
    required: true,
  },
  provider: {
    type: Schema.Types.String,
    required: true,
  },
  revoked: {
    type: Schema.Types.Boolean,
    required: true,
    default: false,
  },
//   createdAt: {},
//   updatedAt: {},
});

module.exports = mongoose.model("AuthClients", schema);
