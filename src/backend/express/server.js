const { MongoClient } = require('mongodb');
const express = require('express');

const serverless = require('serverless-http');

const app = express();
app.use(express.json());

const router = express.Router();
 
const mongoUrl = 'mongodb+srv://cajabor2018:NKcvTG6OokCVCkmX@cluster0.tvh57o9.mongodb.net/test';
router.get('/tasks/:name', async (req, res) => {
    const { name } = req.params
    console.log(name)
    const client = new MongoClient(mongoUrl);
    await client.connect()
 
    const db = client.db('react-tasks-db');

    const task = await db.collection('tasks').findOne({taskName: name});
    if (task){
            res.json(task);
    }else{
        res.sendStatus(404);
    }
});

router.get('/tasks', async (req, res) => {
     
    const client = new MongoClient(mongoUrl);
    await client.connect()
 
    const db = client.db('react-tasks-db');

    const tasks = await db.collection('tasks').find({}).toArray(function(err, docs){});
    if (tasks){
            res.json(tasks);
    }else{
        res.sendStatus(404);
    }
});

router.put('/details/:name/updateStatus', async (req, res) => {
    const { name } = req.params;

    const client = new MongoClient(mongoUrl);
    await client.connect()

    const db = client.db('react-tasks-db');
    console.log(name);
    await db.collection('tasks').updateMany({ taskName: name }, {
        $set: {status: "Completed"}
    });

    const task = await db.collection('tasks').findOne({taskName: name});

    if(task){
        res.json(task)    
    } else{
        //res.send('article no exist');
        const tasks = await db.collection('tasks').find({}).toArray(function(err, docs){
            res.send(docs);
        });
    }
});


router.post('/createnew/', async (req, res) => {
    const { taskID, taskName, taskCategory, dueDate, status, location } = req.body;

    const client = new MongoClient(mongoUrl);
    await client.connect()

    const db = client.db('react-tasks-db');
    const response = await db.collection('tasks').insertOne({
        taskID, taskName, taskCategory, dueDate, status, location
    }); 

    db.collection('tasks').find({}).toArray(function(err, docs){
        res.send(docs);
    });
 
});

router.put('/:name/delete', async (req, res) =>{
    
    const {name} = req.params;
    const client = new MongoClient(mongoUrl);
    await client.connect()

    const db = client.db('react-tasks-db');

    await db.collection('tasks').deleteOne({taskName: name});

    await db.collection('tasks').find({}).toArray(function(err, docs){
        res.send(docs);
    });
});

//  router.listen(8000, () => { 
//      console.log('serve is listening on port 8000');
//  });
 

app.use('/.netlify/functions/server', router);
module.exports.handler = serverless(app);