const express = require ( 'express');
const cors = require('cors')
// const db = require('mongodb').MongoClient;
const UserData = require('./models/userData');
const mongoose = require('mongoose');
const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sampleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    
app.post('/', (req, res) => {
    const data = new UserData({
        name : req.body.fullName,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber,
        age : req.body.age
    });
    data
        .save()
        .then(console.log('data saved in db'))
        .catch((e) => console.error(e));
})

app.get('/', (req, res) => {
    UserData.find({}).then(data => {
        res.send(data)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port,()=> {
    console.log("Connected to the server")
} )


