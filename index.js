/** @format */

const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `Hello jeee server run ho rha h => Dhruva Maheshwari => Done Deployment
    <br>
    <a href="/test">go to Test page</a>`,
  );
});

app.get("/test", (req, res) => {
  res.send(
    `<h1>Test Page</h1><p>The application is successfully deployed and running!</p> <br> 
     <a href="/home">go to home page</a>`,
  );
});

app.get('/home' , (req  ,res)=>{
  res.send("Welcome Back.....");
})

const PORT = process.env.PORT || 4000;

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
