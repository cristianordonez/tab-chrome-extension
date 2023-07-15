import app from './app';

const port = 8080;

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
