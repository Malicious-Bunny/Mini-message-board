const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');


//set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static files


const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//404 error


app.use('/', indexRouter);



app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
});
app.listen(port, () => {
console.log(`link to the app: http://localhost:${port}`);
}
);