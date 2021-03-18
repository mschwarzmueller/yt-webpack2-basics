# Webpack 2 Basics Tutorial
This repo is an update to:

    https://github.com/mschwarzmueller/yt-webpack2-basics

It's the source code that accompanies the Youtube tutorial at:

    https://www.youtube.com/watch?v=GU-2T7k9NfI

The original Youtube tutorial is outstanding.  It teaches a number of things:

* How to create a simple package.json
* How to install webpack
* How to configure package.json and webpack to process javascript files that are connected to other javascript files via import and export statements and convert them into a single bundled javascript file

However, some of the instructions in the video are a little out of date.  The following instructions, and the accompanying repo work as of March 2021:

# After downloading the repo go into the project folder and in a terminal type:

    npm init  

This installs package.json file

# Next, install webpack and the webpack command line interface (cli)

    npm install --save-dev webpack webpack-cli  

The command installs webpack in the nodemodules folder and adds it as a dependency in package.json.  "-save-dev" indicates that it's a dev only dependency that's not needed in prod.

# In the scripts section in package.json add the line: 

    "build": "webpack --mode development --entry ./src/js/app.js --output-path ./dist"
  
The command defines the entry file and the output directory where weppack should place the compiled code. The entry file is where webpack starts its compilation process. From the entry file it follows any import statements to find any other files that are associated with the entry file. It compiles all those files into a single bundled file.  The output path is where webpack will place the single bundled file. (it will be titled "main.js")

# In src/app.js add:

    import {secretButton, secretParagraph} from dom-loader.js

# In dom-loader.js add export to these two lines:

    export var secretButton = document.querySelector('#secret-button');
    export var secretParagraph = document.querySelector('#secret-paragraph');


Since we've defined the entrypoint as app.js we have to add the import and export code so that webpack knows that app.js and dom-loader.js should be bundled together.  The above code does that

# Now lets have webpack compile the javascript:

    npm run build

This creates dist/main.js

# Now go into index.html and replace the two existing script tags with this one:

    <script src="dist/main.js"></script>

# Test the app

Test the app by opening up index.html in a browser.  Since we aren't running a webpack server yet you cant serve it using the
webpack cli (e.g. with npm start).  So, instead, simply access the file directly.  For example in windows 10 I double click on the file in file explorer and it opens in the browser using the file.  The browser should confirm how index.html can now use the webpack created javascript instead of the original javascript.

