const express = require("express");
const cors = require("cors");
const stringsRouter = require("./routes/names");
const validationRouter = require("./routes/validation");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/api/names", stringsRouter);
app.use("/api/validation", validationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
