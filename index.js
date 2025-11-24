const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const conn = require('./Db/conn');
const Task = require('./Models/Task');
const tasksRoutes = require('./Routes/tasksRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());
app.use(express.static('public'));
app.use('/tasks', tasksRoutes);

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err));