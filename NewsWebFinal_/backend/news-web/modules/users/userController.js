const userController = {};
const bcrypt = require("bcrypt");
const token = require("jsonwebtoken");
const User = require("../../models/userSchema");
const util = require("./utils");
const jsonwebtoken = require("jsonwebtoken");
const config = require("./config");
const mongoose = require('mongoose');
const apiKey = "18c3b7dde5e990793e7195e2214f8a48";
const fetch = require("node-fetch");

const newSchema = require("../../models/newsSchema");

userController.login = async (req, res, next) => {
  try {
    // Get email and password from the frontend
    const email = req.body.email;
    const password = req.body.password;

    //Query the db to find user email
    const query = { email: email };
    let emailQuery = await User.findOne(query);

    if (!emailQuery) {
      return res.json({ success: false, msg: "Email not found" });
    } else {
      var password_ = await bcrypt.compare(password, emailQuery.password);
      if (!password_) {
        console.log(password_);
        return res.status(400).json({
          succes: false,
          msg: 'Incorrect Password'
        });
      }

      jsonwebtoken.sign(
        { email: email },
        config.secret,
        { expiresIn: "1h"},
        (err, token) => {
          if (err) {
            return res.send("Not valid user");
          }
          res.status(200).send({ msg: "Logged In successfully", token: token });
        }
      );
    }
  } catch (err) {
    return res.json({ er: err });
  }
};

userController.register = async (req, res, next) => {
  console.log('Register');
  let newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  util.addUser(newUser, (err, user) => {
    if (err) {
      return res.json({ success: false, msg: "Failed to register user" });
    } else {
      return res.json({ success: true, msg: "User Registered Successfully" });
    }
  });
};

// gets the news
// full route: 'api/user/news'
userController.getNews = async (req, res, next) => {
  try {
    let news = await newSchema.find({});
    if (!news) {
      return Promise.reject("No news available");
    }
    return res.status(200).json({
      result: news,
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};

userController.getWeather = (req, res, next) => {
  const city = 6167865;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      city +
      "&appid=" +
      apiKey
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      res.send(data);
    })
    .catch(function () {
      req.status(404).send("City not found");
    });
};

userController.getSports = async (req, res, next) => {
  try {
    let news = await newSchema.find({newsType: 'sports'});
    if (!news) {
      return Promise.reject("News not found");
    }
    return res.json({
      news: news,
    });
  } catch (err) {
    res.status(404).send("Error");
  }
};

userController.addNews = async (req, res, next) => {
  try {
    let news = req.body;
    if(Array.isArray(news)){
      news.forEach(item => {
        item.publishedAt = new Date();
      });
    }
    else{
      news.publishedAt = new Date();
    }
    
    console.log(news);
    let newsDoc = await newSchema.create(news);
    if (!newsDoc) {
      return Promise.reject("Error inserting news");
    }
    return res.status(200).json({
      result: newsDoc,
    });
  } catch (err) {
    return res.status(400).json({
      message: error,
    });
  }
};

userController.deleteNews = async (req, res, next) => {
  try{
    console.log(req.query);
    let news = await newSchema.findByIdAndRemove({_id: new mongoose.Types.ObjectId(req.query.id)});
    if(!news){
      return Promise.reject('Can not delete news');
    }
    return res.status(200).json({
      message: 'Success'
    });

  }
  catch(error){
    return res.status(401).json({
      error: error
    });
  }
}

userController.editNews = async (req, res, next) => {
  try{  
    console.log('BEfore');
    console.log(req.body);
    let updateData = {
      ...req.body,
      _id: new mongoose.Types.ObjectId(req.params.id)
    }
    let news = await newSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(req.params.id)}, updateData);
    console.log(news);
    if(!news){
      return Promise.reject("No news found");
    }
    
    return res.status(200).json({
      message: "Successfully updated"
    });
  }
  catch(error){
    return res.status(401).json({
      error: error
    });
  }
}


module.exports = userController;