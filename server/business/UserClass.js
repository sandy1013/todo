const _ = require('lodash');

const USER_MODEL = require('../models/UserModel');
const UtilsClass = require('../business/UtilsClass');

class UserClass {
    RegisterUser(user) {
        return new Promise((resolve, reject) => {
            USER_MODEL.CreateUser(user).then((user_doc) => {
                if(user_doc) {
                    resolve({success: true});
                } else {
                    reject({success: false, err_msg: "Serverdown please try again after some time." });
                }
            }, (error) => {
                let err_msg = "";
                if(error.code && error.code === 11000) { 
                    if(error.message.indexOf("username") > -1) err_msg = "Username : " + user.username + " is already registered.";
                    if(error.message.indexOf("email") > -1) err_msg = "Email : " + user.email + " is already registered.";
                } else {
                    err_msg = error.message || "Server down please try after some time."
                }
                reject({success: false, err_msg: err_msg });
            });
        });
    }

    LoginUser(user) {
        return new Promise((resolve, reject) => {
            USER_MODEL.findOne({email: user.email}, (err, user_doc) => {
                if(user_doc) {
                    var extracted_token = UtilsClass.EncryptDecryptAlgo(user.password, user_doc.password.salt);
                    if(extracted_token.hash === user_doc.password.hash) {
                        let {db, token} = user_doc.GenerateToken(user.device);
                        db.then((reg_user) => {
                            if (reg_user) {
                                resolve({
                                    data: _.merge(_.pick(reg_user, ['username', 'email', 'cloudsync']), {"success": true}),
                                    token: token
                                });
                            } else {
                                reject({'success': false, 'err_msg': "Something went wrong, Please try after sometime."});
                            }
                        }, (error) => {
                            reject({'success': false, 'err_msg': "Something went wrong, Please try after sometime."});
                        });
                    } else {
                        reject({'success': false, 'err_msg': "Invalid Password."});
                    }
                } else{ 
                    reject({'success': false, 'err_msg': "User is not registered."});
                }
            });
        });
    }

    AuthenticateUser(token) {
        return new Promise((resolve, reject) => {
            USER_MODEL.FindByToken(token).then((user_doc) => {
                resolve(user_doc);
            }, (error) => {
                reject(error);
            })
        });
    }
}

module.exports = new UserClass();