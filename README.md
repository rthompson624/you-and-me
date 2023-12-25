# Application Description

This is a social media application similar to Twitter. There is a single backend server that serves the web client as well as provides the REST api used by the client.

# System Dependencies

## Server

- Ruby 3
- Rails 7

## Web Client

- npm 8
- node 16
- esbuild (javascript bundler)
- React 18
- Typescript

## Database

- Postgres 14

# Development Environment

## Server

`bundle install`

## Web Client

`npm install`

## Database

Set username and password in `config/database.yml`

`rake db:create`

`rake db:migrate`

## Application Startup

Start the development server with the following command.

`./bin/dev`

Access the web client at the following url.

[http://localhost:3000](http://localhost:3000)
