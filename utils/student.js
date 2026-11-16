import {readFile, writeFile } from 'node:fs';
import fs from 'node:fs';
export function addStudent(name,marks){
    //name - argv[2] , marks - argv[3]
    //Or from post request then name , marks"
    // this func is only working cause yeah terminal se ip lerha , and vo bahot low standard hota hai ,
    //  else yeah bhi work na karta , as readFiles async hai , and promises and callback dono use nhi kiya to handle that
    let record = [];

    try{
        const data = fs.readFileSync('./data/students.json','utf8');
        console.log(data);
        record = JSON.parse(data);
    }
    catch(err){
        console.error(err);
    }

    if(name){
        let student = {
        "name": name,
        "marks": Number(marks)
    };

    record.push(student);

    writeFile("./data/students.json", JSON.stringify(record,null,2), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Saved Successful!");
    console.log("All records !");
    console.log(JSON.stringify(record,null,2));
    });
    
    }
}


export function readRecords(){

    let record = "";

    try{
        const data = fs.readFileSync('./data/students.json','utf8');
        record = data;
    }
    catch(err){
        console.error(err);
    }
    // console.log(record);
    return record;
}


export function writeRecords(records){
    writeFile('./data/students.json',JSON.stringify(records,null,2),err=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("item deleted");
        }
    });
}