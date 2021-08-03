const bodyParser = require("body-parser");
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors")
const app = express();

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// For Static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json("hi")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening at ${PORT}`));
