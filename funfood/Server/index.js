const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");


const port = 5005;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`🚀app running at http://localhost:${port}`))

