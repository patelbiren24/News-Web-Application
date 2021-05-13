const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const cors = require('cors');
const mongo = require('mongoose');
const socket = require('socket.io');



(async () => 
{
    try{
        await mongo.connect('mongodb://localhost:27017/newsapp',  {useNewUrlParser: true, useUnifiedTopology: true});
        const chatServer = app.listen(port);
        console.log(`Server listening on ${port}`)
        const io = socket(chatServer, {
            cors: {
                origin: '*'
            }
        });
        io.on("connection", (socket) => {
            console.log(socket.id);
            socket.on('messages', (message) => {
                // console.log(message);
                io.emit('messages', message);
            });
        });
    }
    catch(error){
        return Promise.reject(error);
    }
}
)();


app.use(express.json());
app.use(cors());
app.use("/api/user", require("./modules/users/userRoutes"));
