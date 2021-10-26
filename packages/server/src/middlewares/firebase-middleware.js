const { verifyAuthToken, getAuthToken } = require("../services/firebase");
const { SERVER } = require("../constants/routes");
const db = require("../models");

// Check user has valid token
async function authFirebaseMiddleware(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const userClaims = await verifyAuthToken(bearerToken);
    const user = await db.User.findOne({
      email: userClaims.email,
    });

    // Not authorized if no user
    if (!user && req.url !== `${SERVER.REGISTER}`) {
      throw new Error("Invalid token");
    }

    // User consumed by controller
    req.user = {
      email: userClaims.email,
      firebaseId: userClaims.uid,
    };

    // Go to controller
    next();
  } catch (error) {
    res.status(401).send({ message: "NOT AUTHORIZING", error: error.message });
    next(error);
  }
}

// Register user
async function authRegisterMiddleware(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const userClaims = await verifyAuthToken(bearerToken);

    // User consumed by controller
    req.user = {
      email: userClaims.email,
      firebaseId: userClaims.uid,
    };

    // Go to controller
    next();
  } catch (error) {
    res.status(401).send({ message: "NOT REGISTERING", error: error.message });
    next(error);
  }
}

module.exports = {
  authFirebaseMiddleware,
  authRegisterMiddleware,
};
