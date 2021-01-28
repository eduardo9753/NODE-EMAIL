const express = require('express');
const path = require('path');
const app = express();


//IMPORTACIONES
const emailRouter = require('./routers/email.router');

//SETTING SERVER
app.set('port' , process.env.PORT || 5013);

//STATIC FILES
app.use(express.static(path.join(__dirname , 'public')));

//MIDDLEWARES
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

//ROUTER
app.use('/' , emailRouter);


//SERVER UP
app.listen(app.get('port') , () => {
    console.log('SERVER RUNNING: ', app.get('port'));
})








