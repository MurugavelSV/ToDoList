const express = require('express');
const port = 8000;

// firing the express server
const app = express();

const db = require('./config/mongoose');

// middlewares
app.use('/', require('./routes/index'));
app.use(express.static('./assets'));

// setting up the view engine
app.set('view engine','ejs');
app.set('views', './views');

app.listen(port, (err) => {
    if(err){
        console.log(`Error in starting the server : ${err.message}`);
    }

    console.log(`Server is up and running at port : ${port}`);
})