module.exports.objToJson = function (obj) { 
    return JSON.stringify(obj);
};

module.exports.jsonToObj = function (str) { 
    if (str == ""){
        return {};
    }
    return JSON.parse(str);
};

module.exports.merge = function (cart, item){
    for (var code in item) {
        if(code in cart){
            cart[code] = cart[code] + item[code];
        } else {
            cart[code] = item[code];
        }
    }
    return cart;
}

module.exports.delete = function (cart, item){
    for (var code in item) {
        if(code in cart){
            cart[code] = cart[code] - item[code];
        }
        if (cart[code] <= 0){
            delete cart[code];
        }
    }
    return cart;
}