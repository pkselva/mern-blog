const { Router } =require("express");
const { signup } = require("../controllers/auth.controller");


const router = Router();

router.get("/signup", signup);

module.exports = router;