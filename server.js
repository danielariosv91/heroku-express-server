
const express = require('express')
const app = express()

// Partials 
const hbs = require('hbs');

// helpers 
require('./hbs/helpers');

// heroku 
const port = process.env.PORT || 3000;

// middleware callback 
app.use(express.static(__dirname + '/public'));

// handlebars - Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/', (req, res) => {
    res.render('index', {
        name: 'daniela rios',
        year: new Date().getFullYear()
    });
})



// app.get('/', (req, res) => {
//     let outdata = {
//         nombre: 'Danii',
//         edad: 27,
//         url: req.url
//     }

//     res.send(outdata);
// })

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})