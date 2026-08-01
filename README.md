# 🔗 URL Shortener API

A scalable RESTful URL Shortener built with **Node.js**, **Express.js**, and **MongoDB Atlas**. This application generates short URLs for long links and redirects users to the original destination using a unique short code.


## 🚀 Features

* Shorten long URLs into unique, shareable links
* Redirect users using the generated short URL
* Retrieve all shortened URLs
* Delete shortened URLs
* RESTful API architecture
* MongoDB Atlas cloud database
* Environment variable support for secure configuration


## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **API Testing:** Postman
* **Version Control:** Git & GitHub


## 📁 Project Structure

text
├── controllers/
│   ├── deleteurl.js
│   ├── geturls.js
│   ├── redirectURL.js
│   └── urlcontroller.js
├── models/
│   └── index.js
├── routes/
│   └── urlroutes.js
├── index.js
├── package.json
├── .gitignore
└── README.md




## 🌐 Database

This project uses **MongoDB Atlas** as the cloud database for storing URL mappings.


## 📷 Testing

The API can be tested using **Postman**.

Example workflow:

1. Create a short URL.
2. Copy the generated short URL.
3. Open it in the browser.
4. Verify that it redirects to the original URL.



## 👩‍💻 Author

**Divya Immidisetty**

Backend Developer | Node.js | Express.js | MongoDB | REST APIs

If you found this project useful, consider giving it a ⭐ on GitHub.
