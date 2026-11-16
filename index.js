import {readRecords,writeRecords} from "./utils/student.js";
import express from 'express';

const app = express();
const port = 3000;

//express api's 

//listening requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//landing page
app.get('/',(req,res)=>{
    res.send("home");
});

//showing all students or specific query
app.get('/students',(req,res)=>{
    const {course} = req.query;
    if(course){
        res.send(`Showing details for students with course : ${course}`);
    }
    else{
        let records = JSON.parse(readRecords());
        res.json(readRecords());
    }
});

//parsing req
app.use(express.json());

//handling POST req and getting st details
app.post('/students',(req,res)=>{
    console.log("request recieved!");
    let {name,marks} = req.body;
    if (
        req.status !== 400 &&
        typeof name === "string" &&
        name.trim().length>0 && 
        typeof marks === "number" && 
        marks>=0 && 
        marks <=100
    ){
        addStudent(name,marks);
        res.send(`student details added - name : ${name} , marks : ${marks}`);
    }
    else{
        res.send("Invalid ! Please provide valid details .")
    }
});

//handling invalid json
app.use((err,req,res,next)=>{
    if(err.type == "entity.parse.failed"){
        res.status(400).send("Invalid JSON");
    }
    else{
        next(err);
    }
});


//student search , sending their details as response
app.get('/students/:name',(req,res)=>{
    console.log(req.params);
    let records = JSON.parse(readRecords());

    let matches = records.filter((val)=>{
        return val.name === req.params.name;
    });

    if(matches.length !== 0){
        res.send(matches);
        console.log("student found")
    }
    else{
        res.send("No student found !")
    }
    
});

//DELETE a student from his name
app.delete('/students/:name',(req,res)=>{
    let {name} = req.params;
    let records = JSON.parse(readRecords());
    let isPresent = records.find((val)=>{
        return val.name === req.params.name;
    });
    if(isPresent){
    let newRecords = records.filter((val)=>{
            return val.name !== req.params.name;
        });
    writeRecords(newRecords);
    res.send(`${name}'s details deleted!`);
    }
    else{
        res.send("No student found to delete, please delete existing student.");
    }
    
});

//handling invalid routes
app.get('/{*splat}',(req,res)=>{
    // res.send("Invalid route , please search for correct path");
    res.status(404).json({
        status : 404,
        message : "Page not found"
    });
});


