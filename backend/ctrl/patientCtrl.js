// 1. 클라이언트가 axios로 "backend/patient" 요청
// 2. server.js에서 "./router/patient/index" 라우팅 분기
// 3. router.post로 "./ctrl.age" 클라이언트에게 응답
// client -> backend/server.js -> backend/router/patient.js -> backend/ctrl/patient.js -> client

const models = require("../models");

const age = async (req, res) => {
  const data = await models.covid
    .findAll({
      attributes: ["id", "age"],
      where: {
        age: { [Op.gte]: 20 },
        age: { [Op.lt]: 30 },
      },
    })
    .then((data) => {
      console.log("=======HELLO=========");
      console.log(JSON.stringify(data));
    });

  if (data[0]) {
    console.log(data[0], "check");
    res.status(200).send(data[0]);
  } else res.status(401).send();
};

module.exports = { age };
