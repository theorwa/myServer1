exports.User = class User{
    constructor(user){
        this.email = user.email
        this.password = user.password
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.measurements = user.measurements
    }
}