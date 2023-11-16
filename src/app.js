const express = require('express');
const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRouter);
app.use(userRouter);
app.use(loginRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;