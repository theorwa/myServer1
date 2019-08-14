const connection = require('./models/connection')
const queries = require('./models/queries')

exports.getProfile = function(email) {
    query = queries.getProfile
    return new Promise(function(resolve, reject){
        connection.query(query, [email], function(err, data) {
            if (err) reject(err);
            resolve(data[0]);
        });
    })
}

exports.signup = function(user) {
    query = queries.signup
    return new Promise(function(resolve, reject){
        connection.query(query, [user], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.updateProfile = function(user, email) {
    query = queries.updateProfile
    return new Promise(function(resolve, reject){
        connection.query(query, [user, email], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.getCart = function(email) {
    query = queries.getCart
    return new Promise(function(resolve, reject){
        connection.query(query, [email], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.getFavor = function(email) {
    query = queries.getFavor
    return new Promise(function(resolve, reject){
        connection.query(query, [email], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.addToCart = function(email, item) {
    query = queries.addToCart
    return new Promise(function(resolve, reject){
        connection.query(query, [item], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.addToFavor = function(email, item) {
    query = queries.addToFavor
    return new Promise(function(resolve, reject){
        connection.query(query, [item], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}