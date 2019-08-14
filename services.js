const dataAccess = require('./data-access.js');
const User = require('./models/user.js').User;


exports.getProfile = async function (email) {
    if (!email){
        throw "email not valid!"
    }
    var profile = await dataAccess.getProfile(email)
    if (!profile){
        throw "email not valid!"
    }
    return profile
}

exports.login = async function (email, password) {
    var profile = await this.getProfile(email)
    if (profile.password != password){
        throw "password not matched!"
    }
}

exports.signup = async function (user) {
    user = new User(user);
    await dataAccess.signup(user)
}

exports.updateProfile = async function (user, email) {
    await dataAccess.updateProfile(user)
}

exports.getCart = async function (email) {
    var cart = await dataAccess.getCart(email)
    return (cart) ? cart : {};
}

exports.getFavor = async function (email) {
    var favorites = await dataAccess.getFavor(email)
    return (favorites) ? favorites : {};
}

exports.addToCart = async function (email, item) {
    await dataAccess.addToCart(email, item)
}

exports.addToFavor = async function (email, item) {
    await dataAccess.addToFavor(email, item)
}