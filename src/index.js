const express = require("express");
const stringsRouter = require("./routes/strings");
const validationRouter = require("./routes/validation");

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/strings", stringsRouter);
app.use("/api/validation", validationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
