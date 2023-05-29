# Description of the project
This is a simple full-stack server setup to enable fetching and showing of Helsinki City bike routes and stations, from a local postgres database.

This project has only been tested using Ubuntu.

## Setting project up

Clone project using git clone and then navigate to Helsinki-city-bike-app/frontend and perform "npm install" to fetch package used for running the application.

create a .env file in path Helsinki-city-bike-app/backend with content for postgres path, with the following template.

```
DATABASE_URL= 'postgres://postgres:devving@localhost:5432/helsinkicitybike'
PORT= '3001'
```

Copy data files to Helsinki-city-bike-app/backend/migrations, to have files ready for data migration.

- https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
- https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
- https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv
- https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv


## Setting up the database

Unfortunately this project at the moment supports only postgresql.

Setup psql on your system.
https://www.cherryservers.com/blog/how-to-install-and-setup-postgresql-server-on-ubuntu-20-04

Connect to postgres service and create a database for use with the project and copy proper url into .env.
for example 

`
DATABASE_URL= 'postgres://<user>:<password>@localhost:5432/helsinkicitybike'
`
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Also builds the backend node server to run on port 3001

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
