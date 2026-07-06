const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home', { title: 'My Blog', message: 'Welcome to my blog', currentPage: 'home' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', message: 'Welcome to my about page', currentPage: 'about' })
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', message: 'Welcome to my contact page', currentPage: 'contact' })
})

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.render('greet', { title: 'Greeting', message: `Hello ${name}! Welcome to my blog` })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})