const userRoutes = require("express").Router();
const userController = require("./userController");
const auth = require('./auth');


userRoutes.post("/login", userController.login);

userRoutes.post("/register", userController.register);

userRoutes.get("/weather", userController.getWeather);

userRoutes.get("/sports", userController.getSports);

userRoutes.post("/add", auth, userController.addNews);

userRoutes.post('/edit/:id', auth, userController.editNews);

userRoutes.get('/news', userController.getNews);

userRoutes.delete('/delete', auth, userController.deleteNews);

module.exports = userRoutes;

