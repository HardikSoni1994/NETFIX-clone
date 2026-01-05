<div align="center">
  <br />
  <a href="https://github.com/HardikSoni1994/NETFIX-clone">
    <img src="https://cdn.iconscout.com/icon/free/png-256/netflix-2296042-1912001.png" alt="Netflix Logo" width="120">
  </a>
  <h1>🎬 Netflix Clone - Manager Panel</h1>
  <p>
    <b>A Premium Full-Stack Movie Management Dashboard inspired by Netflix.</b>
  </p>
  <p>
    Built with MERN Stack principles (MongoDB, Express, Node.js) and EJS for templating.
  </p>

  <p>
    <img src="https://img.shields.io/github/last-commit/HardikSoni1994/NETFIX-clone?style=for-the-badge&logo=github&color=d81f26" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/count/HardikSoni1994/NETFIX-clone?style=for-the-badge&color=d81f26" alt="Languages count">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-success.svg?style=for-the-badge&color=d81f26" alt="Maintained">
  </p>
  <br />
</div>

---

## 📖 About The Project

This project is a dynamic, full-stack web application designed to manage a movie database with a UI styled after the iconic Netflix interface. It demonstrates a robust implementation of **CRUD operations** (Create, Read, Update, Delete) architecture.

### ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🔴 Premium Dark UI** | Custom CSS styling to replicate the authentic Netflix dark theme feel. |
| **🔄 Dynamic CRUD** | Seamlessly Add, Edit, and Delete movies directly from the database via the UI. |
| **📱 Responsive Design** | Works beautifully on desktops, tablets, and mobile devices. |
| **🗂️ MVC Architecture** | Clean code structure separating Models, Views, and Controllers. |
| **✨ Interactive Modals** | View movie details in smooth, scrollable pop-up modals without page reloads. |

---

## 🚀 Tech Stack

<div align="center">

| Backend | Database | Frontend | Tools |
| :---: | :---: | :---: | :---: |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) <br> ![ExpressJS](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) | ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white) <br> ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) <br> ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | ![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) <br> ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) |

</div>

---

## 📸 Project Screenshots

<div align="center">
  <h3>🏠 Home Page (Dashboard)</h3>
  <img src="screenshots/AllmovieList.png" alt="Home Page" width="800" style="border-radius: 10px;">
  <br/><br/>

  <h3>📝 Add Movie Form</h3>
  <img src="screenshots/MovieForm.png" alt="Add Movie Form" width="800" style="border-radius: 10px;">
  <br/><br/>

  <h3>🎬 Movie Details Modal</h3>
  <img src="screenshots/editMovie.png" alt="Movie Details Modal" width="800" style="border-radius: 10px;">
</div>

---

<details>
<summary><h2>📂 Folder Structure (Click to Expand)</h2></summary>
<br>

A clean **Model-View-Controller (MVC)** structure ensures code maintainability.

```text
NETFIX-clone/
├── 📂 config/          # Database connection configuration
├── 📂 controllers/     # Business logic (CRUD functions)
├── 📂 models/          # Mongoose database schemas
├── 📂 public/          # Static assets (CSS, client-side JS)
│   ├── 📂 images/
│   └── style.css
├── 📂 routes/          # Express API and view routes
├── 📂 screenshots/     # Project images for README
├── 📂 uploads/         # Directory for uploaded movie posters
├── 📂 views/           # EJS Frontend templates
│   ├── 📂 partials/    # Reusable headers/footers
│   └── ...ejs files
├── .gitignore          # Files ignored by Git
├── server.js           # Application entry point
└── package.json        # Project dependencies and scripts