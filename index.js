const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Simple Node Server Running');
})

const uri = "mongodb+srv://carRent:nuMSbh03vsiOvBBQ@cluster0.disah5t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const carCollection = client.db('carRent').collection('carInfo')

        app.get('/car-info', async (req, res) => {
            const query = {};
            const cursor = carCollection.find(query);
            const carInfo = await cursor.toArray();
            res.send(carInfo);
        })
    }
    finally {

    }

}
run().catch(console.dir)

app.listen(port, () => {
    console.log(`Simple node server running on port ${port}`);
})