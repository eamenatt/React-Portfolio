const router = require("express").Router();

const projectRoute = require("./projects");
const sendRoute = require("./send");

//routes
router.use("/projects", projectRoute);
router.use("/send", sendRoute);

module.exports = router;