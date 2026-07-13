A fully functional blog application built with **Node.js**, **Express.js**, and **EJS** to learn backend web development fundamentals. The application supports complete **CRUD (Create, Read, Update, Delete)** functionality, dynamic routing, server-side rendering, and responsive UI design.



## 🚀 Features

* ✨ Create, view, edit, and delete blog posts
* 📄 Dynamic routing for individual blog pages
* 📝 Form handling using `express.urlencoded()`
* 🎨 Server-side rendering with EJS templates
* ♻️ Reusable EJS partials for cleaner code
* 📱 Responsive design with custom CSS and media queries
* 🚫 Custom 404 error page for invalid routes



## 🛠️ Tech Stack

**Backend**

* Node.js
* Express.js

**Frontend**

* HTML5
* CSS3
* EJS

**Development**

* Nodemon



## 📂 Project Structure

```text
express-blog/
│── public/
│   ├── css/
│   └── images/
│
│── views/
│   ├── partials/
│   ├── index.ejs
│   ├── post.ejs
│   ├── edit.ejs
│   ├── new.ejs
│   └── 404.ejs
│
│── app.js
│── package.json
│── package-lock.json
```

---

## 💻 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/your-repository.git
```

Navigate to the project directory:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🧠 Key Concepts Learned

Through this project, I learned:

* Building REST-style CRUD applications using Express.js
* Handling GET and POST requests
* Passing data from the backend to EJS templates
* Creating dynamic routes using route parameters
* Processing forms with Express middleware
* Organizing reusable views using EJS partials
* Structuring an Express project following best practices
* Designing responsive web pages using CSS
* Understanding the difference between temporary (in-memory) and persistent data storage

---

## 🔮 Future Improvements

* Store posts in MongoDB instead of an in-memory array
* Add user authentication and authorization
* Implement image upload support
* Add search and category filtering
* Improve UI with Bootstrap or Tailwind CSS
* Add pagination for blog posts

---

## 👤 Author

Aditya Krishna

GitHub: https://github.com/L4CHYCODER/Blog-Project
