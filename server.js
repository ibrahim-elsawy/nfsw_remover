const express = require("express");
const app = express();
const processRouter = require("./routes/processing");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.set("view engine", "ejs");


app.use("/process", processRouter);

app.listen(3000);
