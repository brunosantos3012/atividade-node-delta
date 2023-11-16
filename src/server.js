const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`server on PORT ${port}`);
});