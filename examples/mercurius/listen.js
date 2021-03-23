const { app } = require('./');

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Listening on http://localhost:3000');
});
