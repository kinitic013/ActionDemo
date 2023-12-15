const express = require("express");
const app = express();

app.get("/sayHello", (req, res) => {
  const responseData = {
    message: "Hello World",
  };
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
});

app.listen(4000, () => {
  console.log("Server Running ");
});
