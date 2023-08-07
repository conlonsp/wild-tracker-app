# Wild Tracker App

## Description

The Wild Tracker serves as a platform for users to engage with wildlife and conservation organizations, explore ongoing projects, make donations, and track their impact. It promotes awareness, involvement, and support towards wildlife conservation efforts while providing users with a personalized experience and the ability to contribute to specific projects and organizations they are passionate about.

This application can be used locally (in development) through forking via GitHub, or in production at https://wild-tracker-app.onrender.com.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

## Setup Locally

Start by **forking** the application repository to your machine and moving into the application directory.

```console
$ git clone git@github.com:conlonsp/wild-tracker-app.git
$ cd wild-tracker-app
```

When you're ready to start the application, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Make sure to uncomment the seed seed data in **db/seeds.rb** and run:

- `rails db:seed`

to seed data.  Once the data has been seeded, make sure to comment back out the seed data.

## How to Use



## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```