const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.sayHi = (req, res) => {
  res.json({ message: 'Hello from Node !'});
}

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if(err){
      return res.status(400).json({ 
        err: errorHandler(err)
      })
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    })
  })
}

exports.signin = (req, res) => {
  //find user based on email
  const {email, password} = req.body
  User.findOne({email}, (err, user)=>{
    if(err || !user){
      return res.status(400).json({ 
        err: 'User with that email does not exit, please signup'
      })
    }
    //if user is found make user the email and password match
    //create authenticate method in user method
    if(!user.authenticate(password)){
      return res.status(401).json({
        err: 'Email and password don\'t match'
      })
    }

    //generate a signed token with user id and secret
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    //persist the token as 't' in cookies with expiry date
    res.cookie('t', token, {expire:new Date() + 9999})
    //return repsonse with user and token to fron client
    //console.log(data);
    const {_id, fullname, email, role} = user;
    return res.json({ token, user: {_id, email, fullname, role}})
  })
}

//Create and Save new user
exports.create = (req, res) => {}

//Retrieve and redturn all users from database
exports.findAll = (req, res) => {}

//Find a single user with userId
exports.findOne = (req, res) => {}

//Update a user identified by a userId in the request
exports.update = (req, res) => {}

//Delete a user identified by a userId in the request
exports.delete = (req, res) => {}


