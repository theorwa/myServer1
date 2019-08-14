exports.getProfile = 'SELECT * FROM users WHERE email = ? LIMIT 1'
exports.login = 'SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1'
exports.signup = 'INSERT INTO users SET ?'
exports.updateProfile = 'UPDATE users SET ? WHERE email = ?'
exports.getCart = 'SELECT barcode, size, color, image, quantity FROM cart WHERE email = ?'
exports.getFavor = 'SELECT barcode, size, color, image, quantity FROM favorites WHERE email = ?'
exports.addToCart = 'INSERT INTO cart SET ?'
exports.addToFavor = 'INSERT INTO favorites SET ?'


// exports.userAuth =  {
//     getProfile : {
//         select : 'SELECT * FROM users WHERE email = ? LIMIT 1'
//     },
//     login : {
//         select : 'SELECT * FROM users WHERE email = ? LIMIT 1'
//     },
//     signup : {
//         insert : 'INSERT INTO users SET ?'
//     },
//     updateProfile : {
//         update : 'UPDATE users SET ? WHERE email = ?'
//     }
// }

// exports.userCart = {
//     getCart : {
//         select : 'SELECT barcode, size, color, image, quantity FROM cart WHERE email = ?'
//     },
//     getItem : {
//         select : 'SELECT * FROM cart WHERE email = ? AND barcode = ? AND size = ? AND color = ? LIMIT 1'
//     },
//     insertItem : {
//         insert : 'INSERT INTO cart SET ?'
//     },
//     updateItem : {
//         update : 'UPDATE cart SET quantity = ? WHERE email = ? AND barcode = ? AND size = ? AND color = ? ',
//     },
//     deleteItem : {
//         update : 'UPDATE cart SET quantity = ? WHERE email = ? AND barcode = ? AND size = ? AND color = ? ',
//         delete : 'DELETE FROM cart WHERE email = ? AND barcode = ? AND size = ? AND color = ?'
//     },
//     deleteCart : {
//         delete : 'DELETE FROM cart'
//     }
// }

// exports.userFavor = {
//     getFavorites : {
//         select : 'SELECT barcode, size, color, image, quantity FROM favorites WHERE email = ?'
//     },
//     getItem : {
//         select : 'SELECT * FROM favorites WHERE email = ? AND barcode = ? AND size = ? AND color = ? LIMIT 1'
//     },
//     insertItem : {
//         insert : 'INSERT INTO favorites SET ?'
//     },
//     updateItem : {
//         update : 'UPDATE favorites SET quantity = ? WHERE email = ? AND barcode = ? AND size = ? AND color = ? ',
//     },
//     deleteItem : {
//         update : 'UPDATE favorites SET quantity = ? WHERE email = ? AND barcode = ? AND size = ? AND color = ? ',
//         delete : 'DELETE FROM favorites WHERE email = ? AND barcode = ? AND size = ? AND color = ?'
//     },
//     deleteFavorites : {
//         delete : 'DELETE FROM favorites'
//     }
// }