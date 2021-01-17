# MERN HEROKU TEMPLATE

A template for mern projects to be deployed to Heroku

# Setup

- Download the repositiory

- Open terminal from the root directory, or open terminal and then navigate to the root directory with `cd`

- Run the command

```
npm run install-all
```

- This will install the node_modules for both the server and the client

- Rest your eyes for a second while it installs

- Replace author, title, and description in the package.json

- Replace this README with your own

- Be sure to add your MongoDB connection string as the MONGO_URI in both the .env file in the root folder of this app and also in the config variables section on Heroku, in the settings of your app on Heroku

# Usage

Server routes paths should begin with

```
/api/
```

Since the front end proxies requests to any url beginning with /api/
from port 3000 to port 8000 in development

example route:

```
app.post("/api/auth/register", (req, res) => {....})
```

And in the front end, any requests being sent to the server should begin with the prefix as well:

```
axios.post("/api/auth/register", {formDate}).then(result=>{....}).catch(err=>{....})
```

This is being set up by setupProxy.js in development, and automatically handled by Heroku in deployment
So you will want to leave setupProxy.js exactly as it is now inside /client/src

If you already have a React app built, just rename your React app project folder "client" and replace the client folder with it, and if you are planning to set up a backend or already have a backend, make sure to copy over the setupProxy.js file to your React project's src folder, and in your React project's directory, run

```
npm i -D http-proxy-middleware
```

If you already have server routes written you can import/use your express routes in index.js. Be sure to use the same /api/ prefix for requests between the front end and backend.

# Deployment

all of these commands must be run in a terminal <u>from the <b>root</b> folder of your project</u>:

```
heroku login
```

Only run this one if you have not already initialized the git repository. If you already have your project hooked up to a GitHub repo do not run this one:

```
git init
```

```
git add .
```

```
git commit -m “initial commit”
```

```
heroku create
```

'heroku create' gives two urls, use the second one for the next command

```
git remote add heroku <url goes here>
```

Ignore the 'fatal error' message. I know this sounds like terrible advice but trust me it's fine.

```
git push heroku master
```

```
heroku apps:rename (new name goes here)
```

Heroku gives you a random app name and you probably don't want to build a brand with a random name so change the app name using this command

```
heroku open
```
