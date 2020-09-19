const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employees', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false

})
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err));