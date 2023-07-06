const express = require('express')
const app = express()
const port = 8000;
const {db} = require("./src/services/firebase/database")

app.use(db);

app.post(
  "/",
  async (req, res) => {
    const { db } = req;

    await db.collection("example").doc("example").set({
      label: 2
    })

    res.send("éxitoso")
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})