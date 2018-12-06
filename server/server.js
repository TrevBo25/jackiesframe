const express = require('express'),
      bodyParser = require('body-parser')
      cors = require('cors'),
      controller = require('./controller'),
      app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/test', controller.test);

const port = 3344
app.listen(port, () => console.log(`we be jammin on port ${port}`));