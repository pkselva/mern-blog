const { Router } =require("express");
const { test } =require("../controllers/user.controller");


const router = Router();

router.get("/test", test);

module.exports = router;