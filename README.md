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

Make sure to uncomment the seed data in **db/seeds.rb** and seed the data by running the command:

- `rails db:seed`

Once the data has been seeded, make sure to comment back out the seed data.

## How to Use

Wild Tracker allows for user's to interact with organizations and their projects, and track their donation efforts to the varied organizations.  To start, you will want to create an account.

### Signing in and Signup up

Creating an account is simple.  After navigating to the site, click the **Sign Up** button located at the bottom of the log in form.

If you already have an account, enter your login credentials to sign in.

In the Sign Up form, create a username and password, and click the **Next** button.  From here, add an avatar URL and write a 50 to 250 character bio.  Once complete, you can then click **Submit** to create your account.  If there are any errors that arose during account creation, you will be notified and asked to fix the presented errors

### Dashboard

The Dashboard contains information about yourself as a user.  From here, your donations made will be tracked as well as any notes that you've attached to those donations.

### Organizations

The Organizations page is where things start to get a bit more exciting.  A list of organizations will be shown that can be cycled through.  Click the **pagination bar** at the bottom in order to cycle through the different organizations.  If logged in, click the **Create** button to create a new organization.

### Organization Creation

To create an organization, type a name, location, and description in the appropriate fields and click **Submit**.

### Viewing an Organization

Back in the Organizations page, click on any of the organization's listed to view them.  You can then view the organization's mission statement, their associated projects, update and delete the organization, as well as create a new project under that organization.  You can donate to the organization by locating the donation form, adding an amount to donate, and adding a note to say 'Thanks!'.

### Viewing a Project

Click on any of the projects listed under an organization to view it.  Inside the project page, you will see the project's name, mission statement, location, start and end dates.

### Future Implementation

Upcoming additions to Wild Tracker include:

- Updating user profile
- Account deletion
- Search bar and drop down menu for looking up organizations and projects
- Interactive donation tracking

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