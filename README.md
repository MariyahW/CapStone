<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/CIniDlA.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Personal Webpage Capstone</h3>

<div align="center">

</div>

---

<p align="center"> This repository contains the code for my personal portfolio/resume webpage built using React and Node.js Express. It serves as a showcase of my skills, experiences, and projects.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

In this project I will be refactoring a webpage that was primarily html and css to become a full stack application. This application will be deployed at mariyahwatson.com. This is the frontend repo, while the backend repo can be found at [Backend](https://github.com/MariyahW/CapStoneBackend)

#### Features:

##### Responsive Design:

The webpage is designed to be fully responsive, ensuring optimal viewing experience across various devices and screen sizes.

##### Interactive UI:

Utilizing React, the webpage offers an interactive user interface with smooth transitions and dynamic content loading.

##### Resume Download:

Users can easily download my resume directly from the webpage for offline viewing or printing.

##### Contact Form:

A contact form allows visitors to get in touch with me directly through the webpage, facilitating communication and potential opportunities. The form utilizes mongoose/mongodb

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

VScode or a different editor of your choice

### Installing

npm i react-pdf

npm i mdb-react-ui-kit

npm i react-bootstrap

npm i react-router-dom

npm i axios

npm i

Vite will already give you node_modules. If you are pushing to github be sure to add your .gitignore file.

## 🔧 Running the tests <a name = "tests"></a>

This system can and was tested utilizing localhost server prior to development. This allows for you to see styling and alter
items to your liking prior to deployment. You can also run both the frontend and backend to ensure routing/forms are working
properly with database connection

### Break down into end to end tests

Explain what these tests test and why

```
npm run dev
```

will return to utilize localhost:5173

upon opening webpage to the above mentioned webpage you will be able to see, run, and test the application

## 🎈 Usage <a name="usage"></a>

This is used as a personal website to showcase skill level as well as keep an updated copy of my resume available at all times.
By adding the download links even when on the go you may share the site and therefore the resume.

## 🚀 Deployment <a name = "deployment"></a>

When deploying to live system you must run the following:

```
npm run build
```

I have added the needed build script in the package.json file. Once you have run the build script you will be given a dist
folder.

I deployed utilizing cPanel. For my hosting I zipped my dist folder for easy upload. You may upload separately but be sure to get all files as they are in the dist folder.

I then extracted the files in the public html folder of my hosting platform and once the files themselves were moved into the
hosting platform I deleted the unnecessary zipped folder.

## ⛏️ Built Using <a name = "built_using"></a>

- [Vite](https://vitejs.dev/) -React Library
- [React-Bootstrap](https://react-bootstrap.netlify.app/) - Styling
- [MD-Bootstrap](https://mdbootstrap.com/) - Styling
- [ReactPDF](https://www.npmjs.com/package/react-pdf) -Render PDF
- [MongoDB](https://www.mongodb.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Path](https://nodejs.org/api/path.html)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)

## 🤞 ToDo <a name = "todo"></a>

I will add separate skills and operational activities components so that I can update them using props.
This will allow for me to update them dynamically from the App.jsx page

## ✍️ Authors <a name = "authors"></a>

- [@MariyahW](https://github.com/MariyahW) - Idea & Initial work
