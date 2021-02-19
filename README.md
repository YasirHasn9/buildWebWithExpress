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
app.get("/serverLocation(router)" , (require , response ) => {

    response.sendFile(path.join(__dirname, "location"))
})
```

in express to read and send static files/folders we need to use a middleware that 
builds on the node.js called  `use` and inside the node we can direct the static folders