# a template for mern projects to be deployed to heroku

All of these commands must be run in a terminal <u>from the root folder of your project</u>:

<b>heroku login</b>

Only run this one if you have not already initialized the git repository. If you already have your project hooked up to a GitHub repo do not run this one.
<b>git init</b>

<b>git add .</b>

<b>git commit -m “initial commit”</b>

<b>heroku create</b>  
this gives two urls, use the second one for the next command

<b>git remote add heroku </b>(url goes here)
IGNORE FATAL ERROR MESSAGE

<b>git push heroku master</b>

Heroku gives you a random app name and you probably don't want to build a brand called 'Mysterious Meadow' or something so change the app name using this command:
<b>heroku apps:rename</b> (new name goes here)

<b>heroku open</b>

Enter your author name and license info into the README
