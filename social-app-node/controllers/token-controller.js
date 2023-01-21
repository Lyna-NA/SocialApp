const AuthAccessTokens = require("../models/auth-access-tokens");
const AuthClients = require("../models/auth-clients");

module.exports = class TokenController {
  static async allowSignIn(userId, clientId) {
    // console.log(userId, "**", clientId);
    let result = await AuthAccessTokens.findOne({
      userId: userId,
      clientId: clientId,
      revoked: false,
      expiresIn: { $gte: Date.now() },
    });
    return result == null;
  }

  static async revokePreviousToken(userId) {
    let result = await AuthAccessTokens.updateMany(
      { userId: userId, expiresIn: { $gte: Date.now() } },
      { $set: { revoked: true } }
    );
  }

  static async saveNewToken(userId, clientId, expiresIn) {
    let result = await AuthAccessTokens.insertMany({
      userId: userId,
      clientId: clientId,
      expiresIn: expiresIn,
    });
    // console.log(result);
    return result[0];
  }

  static async getAccessToken(tokenId) {
    return await AuthAccessTokens.findById(tokenId);
  }
};