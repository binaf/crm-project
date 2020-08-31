const express = require('express');
const app = express();

// serve up production assets
app.use(express.static('app-react/build'));

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'app-react', 'build', 'index.html'));
});
// if not in production use the port 8080
//const PORT = process.env.PORT || 8080;
//console.log('Le serveur tourne sur le port:',PORT);
//app.listen(PORT);
app.listen(8080, '0.0.0.0');