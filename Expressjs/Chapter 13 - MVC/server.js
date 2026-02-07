// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const {userRouter} = require("./routes/userRouter")
const  {hostRouter}  = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const { pageNotFound } = require('./controller/ErrorHandling');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(pageNotFound)

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});