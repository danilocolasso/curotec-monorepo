[![Docker](https://img.shields.io/badge/Docker-27.3-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![PHP](https://img.shields.io/badge/PHP-8.3-777BB4?logo=php&logoColor=white)](https://www.php.net/releases/8.3/en.php)
[![Nginx](https://img.shields.io/badge/Nginx-1.26-269539?logo=nginx&logoColor=white)](https://www.nginx.com/)
[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)](https://laravel.com/docs/11.x)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

# Curotec assignment

---

### Before install
Make sure you have installed Docker Desktop. If you don't, follow the <a href="https://www.docker.com/get-started" target="_blank">Get Started with Docker</a>.

To provide a comprehensive solution for the assignment, I have divided the project into two separate repositories: one for the backend and another for the frontend. \
You can find the frontend project [here](https://github.com/danilocolasso/curotec-assignment-front).

### Installation guide

#### Clone the project
    git clone git@github.com:danilocolasso/curotec-assignment.git

#### Enter project folder
    cd curotec-assignment

#### Build the containers
    make build

**All done!** Everything should work with a single command. \
The application will be available at:

http://localhost:8000/

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

#### Run tests
    make test

#### Migrate database
<sup>The migrations will run on build process, only run this command if you need to run them again.</sup>

    make migrade

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
- [PHP 8.3](https://www.php.net/releases/8.3/en.php) - Main language
- [Laravel 11](https://laravel.com/docs/11.x) - PHP Framework
- [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum) - API authentication
- [Nginx](https://www.nginx.com/) - Web server
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Pest](https://pestphp.com/) - Testing Framework
- [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - For IDE autocomplete
- [spatie/laravel-permission](https://github.com/spatie/laravel-permission) - For roles and permissions management

### To do
- [ ] To properly use the `spatie/laravel-permission` package
  - <small>Developed it with policies and relationships</small> 
- [ ] STORY-002
- [ ] STORY-003

### Logs
- All application logs, including **Laravel** and **Nginx** are located in `storage/logs` directory.

## Additional Project for Enhanced Reference
To provide a better reference of my work, I am temporarily making publicly available a system I am currently modernizing for a client company, made in Laravel. This project will be accessible on this [GitHub Repository](https://github.com/danilocolasso/e60-backend) for the next few days. Feel free to explore and provide feedback!
