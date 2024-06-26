
const environment = require('./configs/environment.config');
const gDrive = require('./g-drive/sheets');
const express = require('express');


const logger = require('./middlewares/logger');
const noteModel = require('./models/subscriber.model');

const notes = require('./routes/notesRoute');
const users = require('./routes/usersRoute');
const subscriber = require('./routes/subscriberRoute');

const app = express();

// Setting an env variable
// Mac: export PORT=3000
// Win: set PORT=3000


// Enable passing of json obj and url encoded
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Logger middleware
app.use(logger);


// Home
app.get('/', (req, res) => {
    let home = "welcome to express api";
    console.log(parseInt(environment.port));
    res.send({"message": home});

});

// Api
app.get('/api', (req, res) => {
    let home = "welcome to express api";
    console.log(parseInt(environment.port));
    res.send({"message": home});

});



// Users resources
app.use('/api/users', users);

// Notes resources
app.use('/api/notes', notes);

// Subscriber
app.use('/api/subscriber', subscriber);


// Mongodb notes
app.get('/notes', async (req, res) => {
    console.log(noteModel);
    res.json(noteModel).status(200);
});

app.get('/notes/all', async (req, res) => {
    try{
        const data = await noteModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/notes', async (req, res) => {
    const data = new noteModel({
        title: req.body.title,
        content: req.body.content
    })

    try {
        const result = await data.save();
        return res.status(200).json(result);
    } catch (error) {
        console.log('there was an error: ', error);
        return res.status(500).json({"message": "internal server error"});
    }

});





app.get('/g-drive', (req, res) => {
    res.json(gDrive);
});




app.listen(environment.PORT, () => {
    console.log(`Server is listening on port: ${environment.PORT}`);
});