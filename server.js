const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// DB ORM 연동
const models = require("./models");

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("DB 연결 실패");
    console.log(err);
  });

// models.covid.findAll().then(console.log);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
