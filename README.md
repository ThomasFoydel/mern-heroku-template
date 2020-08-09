# a template for mern projects to be deployed to heroku

To make it run locally you need to run <b>npm i</b> from the root folder.

If you are using this as a starting point, then <b>cd client</b> and <b>npm i</b> again.

If you already have an app built, just rename your React app project folder "client" and replace the client folder with it. Import/use your express routes in index.js.

## To deploy to Heroku, all of these commands must be run in a terminal <u>from the root folder of your project</u>:

<b>heroku login</b>

<b>git init</b> Only run this one if you have not already initialized the git repository. If you already have your project hooked up to a GitHub repo do not run this one

<b>git add .</b>

<b>git commit -m “initial commit”</b>

<b>heroku create</b>  
this gives two urls, use the second one for the next command

<b>git remote add heroku </b>(url goes here)
IGNORE FATAL ERROR MESSAGE

<b>git push heroku master</b>

<b>heroku apps:rename</b> (new name goes here) <br/>
Heroku gives you a random app name and you probably don't want to build a brand called 'Mysterious Meadow' or something so change the app name using this command

<b>heroku open</b>

Enter your author name and license info into the README
