const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server Running');
})

// DB_USER: carRent
// DB_PASS: nuMSbh03vsiOvBBQ

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://carRent:nuMSbh03vsiOvBBQ@cluster0.disah5t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());
const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 2, name: 'Shanoor', email: 'Shanoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'Sabila@gmail.com' },

];

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Simple node server running on port ${port}`);
})