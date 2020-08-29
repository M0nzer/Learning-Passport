
var db = require('../db');

let model = {
    signup: (input, cb) => {

        let data = {
            username: input.username,
            password: input.password,
            email: input.email,
            firstname: input.firstname,
            lastname: input.lastname,
            isactive: 1
        };
        
        return db.query("INSERT INTO users SET ?", [data], cb)
    },
    findOne: (username, cb) => {
        return db.query("SELECT * FROM users WHERE username=? AND isactive=1", [username], cb);
    },
    findById: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=? AND isactive=1", [id], cb);
    }
}

module.exports = model;
