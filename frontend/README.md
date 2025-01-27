[![Docker](https://img.shields.io/badge/Docker-27.3-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)

# Curotec assignment - Frontend

---

### Before install
Make sure you have installed Docker Desktop. If you don't, follow the <a href="https://www.docker.com/get-started" target="_blank">Get Started with Docker</a>.

To provide a comprehensive solution for the assignment, I have divided the project into two separate repositories: one for the backend and another for the frontend. \
You can find the backend project [here](https://github.com/danilocolasso/curotec-assignment).

### Installation guide

#### Clone the project
    git clone git@github.com:danilocolasso/curotec-assignment-front.git

#### Enter project folder
    cd curotec-assignment-front

#### Build the containers
    make build

**All done!** Everything should work with a single command. \
The application will be available at:

http://localhost:3000/

##### Credentials
- **username:** danilo
- **password:** password

### Usefull commands
#### Build Containers
<sup>You only need to build containers once. After that you can just start them.</sup>

    make build

#### Start containers

    make start

#### Stop containers
    make stop

#### List containers
    make ps
    make status

#### Restart containers
    make restart

For command details, refer to the `Makefile` in the application root.

### Technologies used
- [Docker](https://www.docker.com/) - For containerization
- [Node.js](https://nodejs.org/) - Image for the frontend
- [Vue.js](https://vuejs.org/) - Frontend framework
- [Vue Router](https://router.vuejs.org/) - Router for Vue.js
- [Pinia](https://pinia.vuejs.org/) - State management
- [Axios](https://www.npmjs.com/package/axios) - HTTP client
- [VeeValidate](https://vee-validate.logaretm.com/v4/) - Form handling
- [Yup](https://www.npmjs.com/package/yup) - Form validation
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Heroicons](https://heroicons.com/) - Icons
- [Shadcn-vue](https://www.shadcn-vue.com/) - Components starter kit
- [Vue3 toastify](https://www.npmjs.com/package/vue3-toastify) - Toast notifications

### To do
- [ ] Add tests
- [ ] Add Project pages
- [ ] Add Users page
- [ ] Add User profile page
- [ ] STORY-002
- [ ] STORY-003

## Additional Project for Enhanced Reference
To provide a better reference of my work, I am temporarily making publicly available a system I am currently modernizing for a client company, made in React. This project will be accessible on this [GitHub Repository](https://github.com/danilocolasso/e60-frontend) for the next few days. Feel free to explore and provide feedback!

