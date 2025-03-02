const express = require("express");

const r_user = require("./routes/r_user");

const app = express();
app.use(express.json());

app.use("/user", r_user);

app.listen(5000, () => {
  console.log("Server berjalan di port 5000!");
});
