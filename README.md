[![Docker](https://img.shields.io/badge/Docker-27.3-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![PHP](https://img.shields.io/badge/PHP-8.3-777BB4?logo=php&logoColor=white)](https://www.php.net/releases/8.3/en.php)
[![Nginx](https://img.shields.io/badge/Nginx-1.26-269539?logo=nginx&logoColor=white)](https://www.nginx.com/)
[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)](https://laravel.com/docs/11.x)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

# Curotec assignment

---

### Before install
Make sure you have installed Docker Desktop. If you don't, follow the <a href="https://www.docker.com/get-started" target="_blank">Get Started with Docker</a>.


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

### Logs
- All application logs, including **Laravel** and **Nginx** are located in `storage/logs` directory.

<br />
<h4 align="center">
    Made with ♡ by <a href="https://www.linkedin.com/in/danilocolasso/" target="_blank">Danilo Colasso</a>
</h4>
