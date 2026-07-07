const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
const PORT = 3000;

let posts = [
    {
        id: 1,
        title: "post1",
        content: "Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea.",
        date: "2022-01-01",
        author: "krish"
    },

    {
        id: 2,
        title: "post2",
        content: "Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea.",
        date: "2022-01-02",
        author: "krish"
    },
    {
        id: 3,
        title: "post3",
        content: "Paragraph development begins with the formulation of the controlling idea. This idea directs the paragraph’s development. Often, the controlling idea of a paragraph will appear in the form of a topic sentence. In some cases, you may need more than one sentence to express a paragraph’s controlling idea.",
        date: "2022-01-03",
        author: "krish"
    }
]



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

app.get('/posts', (req, res) => {
    res.render('posts', { title: 'posts', currentPage: 'posts', posts: posts });
})


app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).send('post not found')
    }
    res.render('post', { title: post.title, currentPage: 'posts', message: post.content, date: post.date, name: post.author });
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})