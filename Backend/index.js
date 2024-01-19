const express = require('express');
const connectDB = require('./mongodb/connect.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const keywordSearchRoutes = require('./routes/keywordSearchRoutes.js');
const Keyword = require('./mongodb/models/model.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/keywordSearch', keywordSearchRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST request to save keyword and volumes to database (MongoDB)
app.post('/post', async (req, res) => {
    try {
        const { keyword, volumes } = req.body;
        const newKeyword = new Keyword({
            keyword,
            volumes
        });
        await Keyword.create(newKeyword);
        res.send('Keyword saved successfully!');
    } catch (err) {
        console.log(err);
        res.send('Error saving keyword');
    }
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_DB_URL);
        app.listen(PORT, () => console.log('Server is running...'));
    } catch (err) {
        console.log(err);
    }
}

startServer();