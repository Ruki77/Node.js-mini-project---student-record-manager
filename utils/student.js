import { readFile, writeFile } from 'node:fs';

let argv = process.argv;

export function addStudent(){
    
    let record = [];

    readFile('./data/students.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    record = JSON.parse(data);

    let student = {
        "name": argv[2],
        "marks": Number(argv[3])
    };

    record.push(student);

    writeFile("./data/students.json", JSON.stringify(record,null,2), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Saved Successful!");
    });
    });
};
