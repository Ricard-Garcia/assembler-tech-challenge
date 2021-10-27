`#challenge` `#48h` `#tech-interview` `#master-in-software-engineering`

# Memerized (Assembler Tech Challenge) <!-- omit in toc -->

> Memerized is a web application developed in 72h. as a technical challenge test at Assembler School. The main objective of this challenge is to develop a fully functional application to upload, name, tag & share memes & gifs through its pages.

## Brief

Original specifications defined by Assembler School.

### ⏳ Time for development

You will have **48 hours** from the delivery of the challenge to solve it.

### 🎯 Objectives

The **project** to be **developed** for this **challenge** will be a **Memes and Gifs** web page in which **users** can **upload their files** and **share** it with **everyone**.

### 🧱 General analysis

The **final purpose** is that **any user** can **visit** the web page and **share** the **content** uploaded by **registered users**.

The **main functionalities** are detailed below:

- **Login** and **registration**
- **Home page** that will show the **content uploaded** by users
- **Main Navbar** that will include:
  - **Content search bar**:
    - You will have at least **three options** to filter the **main content**
  - **Links** to the **main categories**
  - **Information** of the **logged in user**
    - If you are not logged in, the **button** to log in will be **displayed**
- **Upload content page**
  - If the user is logged in, a **multimedia resource** can be **uploaded** from their **computer** or from a an **external link**
- **Page** of the **selected multimedia** element:
  - The **user can obtain the link** of the **multimedia resource** to include it on any **website**

### 🔑 Key requirements

- Use at least **one third-party API**
- Use at least **one third-party library**
- Creation of your own **database** to **store** all the **information**
- **Anyone can access the website** and **view** the **content** of other **users**, but only **previously registered** users **can upload multimedia content**

## Result

This is the actual result to Assembler's Tech Challenge and summarizes how to install Memerized, how is organized and some information about the process of developing it.

### Requirements 📋

You need to install [NodeJs](https://nodejs.org/) and also install Yarn globally like so:

```
npm install --global yarn
```

Memerize uses some external helpers to manage accounts, db and files so you'll need to create an account in the following links and use its configuration variables to store them later on inside our environment files (read below at installation)

- [Firebase](https://firebase.google.com/)
- [MongoDB Atlas](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)

## Installation 🔧

First, choose a place in your local machine and `clone` this repository like so:

```
git clone https://github.com/Ricard-Garcia/assembler-tech-challenge.git
```

To install all dependencies you'll need to run yarn install in the base folder:

```
yarn install
```

When you have all the dependencies installed you need to create two `.env` files, one located in _client_ folder and one in _server_ folder.

The client .env file need to contain the next variables:

```
REACT_APP_WAVE_API_ROUTE = http://localhost:4000/api
REACT_APP_WAVE_STATS_API_ROUTE = Your Laravel app route
```

The server .env file need to contain the next variables:

```
# Database
MONGO_DB_URL_PRODUCTION = Your MongoDB Atlas connection url for producction MONGO_DB_URL_DEVELOPMENT = Your MongoDB Atlas connection url for development
MONGO_DB_URL_TEST = Your MongoDB Atlas connection url for test

# Access token to
API ACCESS_TOKEN_SECRET = Your access token

# Server settings
PORT = 4000

# Firebase settings
FB_CERT_TYPE = Your FireBase cert type
FB_CERT_PROJECT_ID = Your FireBase project id
FB_CERT_PRIVATE_KEY_ID = Your FireBase private key id
FB_CERT_PRIVATE_KEY = Your FireBase private key
FB_CERT_CLIENT_EMAIL = Your FireBase client email
FB_CERT_CLIENT_ID = Your FireBase client id
FB_CERT_AUTH_URI = Your FireBase Auth uri
FB_CERT_TOKEN_URI = Your FireBase token uri
FB_CERT_AUTH_PROVIDER_X_509_CERT_URL = Your FireBase cert auth provider x 509 cert url FB_CERT_CLIENT_X_509_CERT_URL = Your FireBase cert client x 509 cert url

# Cloudinary settings
CLOUDINARY_API_KEY = Your Cloudinary API Key
CLOUDINARY_API_SECRET = Your Cloudinary API Secret
CLOUDINARY_NAME = Your Cloudinary name
```

### Folder structure 🗂

<pre>  
├── documentation <i>// All project wireframes, PRD, and presentation files</i>  
└── packages <i>// Monorepo workspaces</i>  
├── client <i>// Frontend React App</i>  
│ └── src  
│ ├── api <i>// All api petitions</i>  
│ ├── assets  
│ ├── components  
│ ├── constants  
│ ├── pages  
│ ├── redux  
│ ├── sass  
│ └── services <i>// 3rd party services used</i>  
└─ server <i>// Backend Node Server</i>  
  └──── src  
  ├── config  
  ├── controllers  
  ├── db  
  ├── middlewares  
  ├── models  
  ├── routes  
  ├── services  
  └── uploads <i>// Folder for temporary uploaded files</i>  
</pre>

As you can see, this is a monorepository project which means that is divided into diferent _packages_ using `yarn workspaces`. The root folder of the project contains a couple of packages, one for front functionalities _client_ and another one for the _server_ ones focused on backend functionalities.

#### 🖥 Client

Essentially a React app with `create-react-app` structured around the `src` folder which contains components and pages on the one hand. On the other hand, there are directories to store api calls, the redux state (containing registered user data), global constants and other services (like Firebase functions).

#### 🔐 Server

A server using NodeJS and Express. The `db` folder contains all seeders and connection to MongoDb Atlas. All MC (Model/Controller) files are defined here to define the architecture needed to consume the database and make connections to the front.

### 🧭 App navigation

As said, the application consists of the following pages:

- Sign in: authenticate form to access app.
- Sign up: registration form to create user into Firebase and database
- Home page: general app overview.
- Category/Tag page: see all memes tagged under the same tag.
- Upload: upload meme.
- Overview: get details of meme.

### Naming convention

To standarize and facilitate the declaration of project elements such as folders, files, variables, functions… before starting the project, a naming convetion was established like so:

| Element                     | Case               |
| :-------------------------- | :----------------- |
| `React (Components/Pages)`  | `UPPER_SNAKE_CASE` |
| `JS (Variables/Functions) ` | `camelCase`        |
| `CSS (Classes)`             | `kebab-case`       |
| `CSS (ID)`                  | `camelCase`        |
| `Branches`                  | `kebab-case`       |
| `Global constants`          | `UPPER_SNAKE_CASE` |
| `Formik schemas`            | `kebab-case`       |
| `Util files`                | `kebab-case`       |

## 🕵️‍♂️ Resources

A list of all dependencies & libraries needed to develop this application.

### Main resources 🧬

- [Axios](https://axios-http.com/docs/intro)
- [Bootstrap](https://getbootstrap.com/)
- [Cloudinary](https://cloudinary.com/)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node JS](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [React Redux](https://es.redux.js.org/)
- [React Router](https://github.com/remix-run/react-router)
- [SASS](https://sass-lang.com/)

### Support libraries 📚

- [Formik](https://github.com/formium/formik)
- [History](https://github.com/remix-run/history)
- [Morgan](https://github.com/expressjs/morgan)
- [Multer](https://github.com/expressjs/multer)
- [Nodemon](https://nodemon.io/)
- [React-toastify](https://github.com/fkhadra/react-toastify)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Validator](https://github.com/validatorjs/validator.js/)
- [Yup](https://github.com/jquense/yup)

## ✨ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section --> <table> <tr> </td> <td align="center"><a href="https://github.com/Ricard-Garcia"><img src="https://avatars.githubusercontent.com/u/15958524?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricard García</b></sub></a> </td></tr></table>
