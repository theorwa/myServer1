// const home = require('./routerHome');
// const authUser = require('./routerUserAuth');
// const cartUser = require('./routerUserCart');
// const favoritesUser = require('./routerUserFavor');
// const cartGuest = require('./routerGuestCart');

// const router = require("express").Router();
// router.use("/", home);
// router.use("/user", authUser);
// router.use("/user/cart", cartUser);
// router.use("/user/favorites", favoritesUser);
// router.use("/Guest/cart", cartGuest);

// module.exports = router;





const router = require("express").Router();
const controller = require("./controllers.js");
const middleWareAuth = require('./models/middlewareAuth.js');
const send = require('./models/send.js')

const checkBefore = controller => {
    return async (req, res, next) => {
        middleWareAuth.checkToken(req, res)
        await controller(req, res);
        send.sendRes(req, res);
    }
}

const generateAfter = controller => {
    return async (req, res, next) => {
        console.log("hii")
        await controller(req, res);
        middleWareAuth.generateToken(req, res)
        send.sendRes(req, res);
    }
}



// --------------------------- user auth routes ----------------------------
// get
router.route("/user/get-profile").get(checkBefore(controller.getProfile));
router.route("/user/get-cart").get(checkBefore(controller.getCart));
router.route("/user/get-favorites").get(checkBefore(controller.getFavor));

// post
router.route("/user/login").post(generateAfter(controller.login));
router.route("/user/signup").post(generateAfter(controller.signup));
router.route("/user/add-to-cart").post(checkBefore(controller.addToCart));
router.route("/user/add-to-favorites").post(checkBefore(controller.addToFavor));

// token
router.route("/user/new-token").post(middleWareAuth.refreshToken);
router.route("/user/check-token").post(middleWareAuth.checkToken, middleWareAuth.goodToken);

// put
router.route("/user/update-profile").put(checkBefore(controller.updateProfile));

// --------------------------- clothes routes ----------------------------







module.exports = router;