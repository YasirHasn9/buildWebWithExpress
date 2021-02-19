# buildWebWithExpress

Dive into the Node/Express and use it for building website

1. Create `package.json` by running the `npm init -y` in the terminal
2. install express by running the `npm install express` in the terminal

** note **
if you wanna push your code to your `github` , create a .gitignore file in the root
so you don't push the `node_modules`

### How to send files to the server using express

- need a module called path
  `const path = require("path")` path is a constant that exits on Express

- read the file <br />
  on the response on the callback function on the router there is a function
  called `sendFile`

```js
app.get('/serverLocation(router)', (require, response) => {
  response.sendFile(path.join(__dirname, 'location'));
});
```

** Note **
in express to read and send static files/folders we need to use a middleware that
builds on the node.js called `use` and inside the node we can direct the static folders

** Note: Development **
These tools won't be pushed to our production, they are here to help
us as developers to speed our process and also to
help us catch the errors

- To avoid pitfalls like syntax's error and also wanna know where do we make the mistakes
- This is why, we have a lot of tools such `eslint`
- To get the `eslint` working we can run the command `npx` which is build on the node
  `npx` allows us to get access to the `node_modules` and find the package we want to
  work on.

in the terminal run `npx eslint --init` this will run the script that provided by eslint, you get some questions, you can google them

- Also, we have another tool called prettier. It help to format our code.
  install it
  `npm install -D prettier eslint-config-prettier eslint-plugin-prettier`
  VSCode has no idea what its been install, so we need to install 2 extensions `prettier & Eslint`

- It is pretty tedious to load express every time we make a change.
  There is tool can make it easier to us called `nodemon` run `npm install -D nodemon`
  will run express for us on every change by going to `package.json`

  ```js
  "scripts":{
      "start":"node server.js",
      <!-- this is what are going to add -->
      "dev":"nodemon sever.js"
  }
  ```

  this will do the trick for us

- install `ejs` to enable us to read html files by switched its file extensions from `index.html` to `index.ejs`
  [ejs](https://ejs.co/)

## Middlewares

They are key concepts in express and almost everything build around them.

- Syntax

```js
router.use(callback)
router.use(path, callback)
router.[get | post | delete | update | put](path,callback)
```

- they can execute any code
- they can change and manipulate the request-response object
- they can stop the request-response cycle
- they can call the next middleware in the stack
