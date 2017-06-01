const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./.config.js');
const app = express();

/*var*/

var mainCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
var corsOptions = {
    origin:'http:/localhost:3000'
};

// /*Middleware*/
app.use(express.static('./public'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
    secret: './config.sessionSecret',
    resave: false,
    saveUninitialized:false
}));


/*endpoints*/
// app.get('/example',function(req,res){
//     //this route is CORS enabled across all origins
//     return res.status(200).send('ok');
// });

// app.get('/example-two',function(req,res){
//     //this route is not CORS enabled
//     return res.status(200).send('ok');
// });

app.get('/api/profiles',profileCtrl.getFriendsProfiles);

app.post('/api/login',mainCtrl.login);


app.listen(3000,function(){
    console.log('Listening to port 3000');   
});