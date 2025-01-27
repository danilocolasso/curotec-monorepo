[![Docker](https://img.shields.io/badge/Docker-27.3-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![PHP](https://img.shields.io/badge/PHP-8.3-777BB4?logo=php&logoColor=white)](https://www.php.net/releases/8.3/en.php)
[![Nginx](https://img.shields.io/badge/Nginx-1.26-269539?logo=nginx&logoColor=white)](https://www.nginx.com/)
[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)](https://laravel.com/docs/11.x)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)

# Curotec Assessment

---

### Before install
Make sure you have installed Docker Desktop. If you don't, follow the <a href="https://www.docker.com/get-started" target="_blank">Get Started with Docker</a>.

### Installation guide

#### Clone the project
    git clone git@github.com:danilocolasso/curotec-assessment.git

#### Enter project folder
    cd curotec-assessment

#### Build the containers
    make build

**All done!** Everything should work with a single command. \
The application will be available at:

Backend: http://localhost:8000/ \
Frontend" http://localhost:3000/

**Credentials** \
**username:** danilo \
**password:** password

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

#### Migrate database
    make migrate
<sup>The migrations will run on build process, only run this command if you need to run them again.</sup>

#### Run tests
    make test
<sup>There are only backend tests available.</sup>

There are also specific backend and frontend commands available. Just add the prefix `backend-` or `frontend-` to the command. \
e.g. `make backend-stop`.

For command details, refer to the `Makefile` in the application root.

### Availabe endpoints
- **GET** `/user` - User profile
- **POST** `/login` - Login
- **POST** `/register` - Register
- **POST** `/logout` - Logout
- **GET** `/projects` - List all projects, paginated, with optional search by title, tags or status
- **POST** `/projects` - Create a new project
- **GET** `/projects/{id}` - Show a project
- **PUT** `/projects/{id}` - Update a project
- **DELETE** `/projects/{id}` - Delete a project
- **POST** `/projects/{id}/contributors` - Add a contributor to a project
- **DELETE** `/projects/{id}/contributors/{user_id}` - Remove a contributor from a project

### Technologies used
- [Docker](https://www.docker.com/) - For containerization

Backend:
- [PHP 8.3](https://www.php.net/releases/8.3/en.php) - Main language
- [Laravel 11](https://laravel.com/docs/11.x) - PHP Framework
- [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum) - API authentication
- [Nginx](https://www.nginx.com/) - Web server
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Pest](https://pestphp.com/) - Testing Framework
- [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - For IDE autocomplete
- [spatie/laravel-permission](https://github.com/spatie/laravel-permission) - For roles and permissions management

Frontend:
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
Backend:
- [ ] To properly use the `spatie/laravel-permission` package
    - <small>Developed it with policies and relationships</small>
- [ ] Add more tests
- [ ] STORY-002
- [ ] STORY-003

Frontend:
- [ ] Add tests
- [ ] Fix bug in project creation
- [ ] Add contributors fields to form (backend is ready to use)
- [ ] Add Users page
- [ ] Add User profile page
- [ ] STORY-002
- [ ] STORY-003

### Logs
- All backend logs, including **Laravel** and **Nginx** are located in `storage/logs` directory.

## Additional Project for Enhanced Reference
To provide a better reference of my work, I am temporarily making publicly available a system I am currently modernizing for a client company, made in Laravel and React. This project is split into 2 repositories and they will be accessible for the next few days: [Backend](https://github.com/danilocolasso/e60-backend) and [Frontend](https://github.com/danilocolasso/e60-frontend) . Feel free to explore and provide feedback!
