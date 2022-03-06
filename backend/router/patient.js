// 1. 클라이언트가 axios로 "backend/patient" 요청
// 2. server.js에서 "./router/patient/index" 라우팅 분기
// 3. router.post로 "./ctrl.age" 클라이언트에게 응답
// client -> backend/server.js -> backend/router/patient.js -> backend/ctrl/patient.js -> client

const patientCtrl = require("../ctrl/patientCtrl.js");
const router = require("express").Router();
router.post("/age", patientCtrl.age);

module.exports = router;
