const services = require('./services.js');
const send = require('./models/send.js');
const store = require('./models/convertData.js');
const middleWareAuth = require('./models/middlewareAuth.js');

exports.getProfile = async function(req, res) {
    var profile = await services.getProfile(req.decoded.email)
    delete profile["password"]
    res.locals.profile = profile
};

exports.login = async function(req, res) {
    console.log(req.body)
    await services.login(req.body.email, req.body.password);
};

exports.signup = async function(req, res, next) {
    await services.signup(req.body);
};

exports.updateProfile = async function(req, res, next) {
    await services.updateProfile(req.body);
};

exports.filterClothes = function(req, res, next) {
    req.data.clothes = store.display_all_items()
    next()
};

exports.getCart = async function(req, res, next) {
    var cart = await services.getCart(req.decoded.email)
    res.locals.cart = cart
};

exports.getFavor = async function(req, res, next) {
    var favorites = await services.getFavor(req.decoded.email)
    res.locals.favorites = favorites
};

exports.addToCart = async function(req, res, next) {
    await services.addToCart(req.body.email, req.body.item)
};

exports.addToFavor = async function(req, res, next) {
    await services.addToFavor(req.body.email, req.body.item)
};