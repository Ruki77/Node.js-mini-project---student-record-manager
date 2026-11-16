import {addStudent} from "./utils/student.js";

//handling terminal input 
// only node js part
let argv = process.argv;
addStudent(argv[2],argv[3]);
