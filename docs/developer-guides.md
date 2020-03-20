# [TO BE UPDATED!]

# Developer Guides

## 1. Installation

## Environment

Please install the following:

- `python` version 3.7=<
- `pip` latest version.
- `virtualenv` latest version.

## Database

- `postgresql` in [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- `pgadmin 4` in [here](https://www.pgadmin.org/download/)

## Project

Go to root project and follow command lines below:

```bash
# Windows
$ virtual env # create env folder
$ cd env/Scripts # go to env scripts directory
$ activate.bat # run the env
$ pipenv install -r requirements.txt # install pip packages (backend)
$ npm install # install npm packages (frontend)
```

We recommend to use `pgAdmin4` as the DB admin dashboard.

## 2. How to run

### Mac / Linux

> Coming soon!

### Windows

1. Always run the local environment (`env`) as described above by running `server.bat`
2. [OPTIONAL] When you need to run the server manually:

```bash
  $ cd main
  $ python manage.py runserver
```

3. Open new tab, and run the frontend client locally

```bash
  $ npm run dev
```

## 3. Passwords

| Name       | Username | Password   |
| ---------- | -------- | ---------- |
| PostgreSQL | postgres | `qwer1234` |
