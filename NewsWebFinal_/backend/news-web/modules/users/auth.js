const webtoken = require('jsonwebtoken');
const config = require('./config');

const auth = async (req, res, next) => {
    try{
        let token = req.get('Authorization').split(' ')[1];
        console.log(token);
        if(!token){
           return Promise.reject('Not valid access');
        }
        let result = await new Promise((resolve, reject) => {
            webtoken.verify(token, config.secret, (err, decode) => {
                if(err){reject(err);}
                if(!decode){reject('Not a valid token');}
                resolve(decode);
            });
        });
        next();
    }
    catch(error){
        return res.status(400).json({
            error: error
        });
    }
    
}

module.exports = auth;