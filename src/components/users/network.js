const express = require("express");
const Controller = require("./controller")

const router = express.Router();

function addUser(req, res){
    const { auth } = req;
    const {
        email,
        password,
        displayName
    }=req.body;
    Controller.addUser({
        auth, 
        email,
        password,
        displayName
    }).then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function getUser(){
    const { auth } = req;
    const { email } = req.body;
    Controller.getUser({
        auth,
        email

    }).then((result) =>res.send(result))
    .catch((error) => res.send(error))
}
router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/update-user", updateUser)
module.exports = router