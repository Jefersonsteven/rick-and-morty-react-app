require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routerApi = require("../routes");
const app = express();

const PORT =  process.env.PORT || 3001;
console.log(`Server open in http://localhost:${PORT} 🚀`)

app.use(express.json());
app.use(cors());

app.listen(PORT);
routerApi(app);