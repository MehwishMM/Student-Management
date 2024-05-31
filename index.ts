
import inquirer from "inquirer";
import chalk, { colorNames } from "chalk";


console.log(chalk.green("===================================="));
console.log(chalk.red("Welcome to School Managment System"));
console.log(chalk.green("===================================="));

let docontinue = true;
 while(docontinue){
let mybalance = 0;
let id = Math.floor(10000 + Math.random() *  90000);

 
let student = await inquirer.prompt([
        {
            name: "studentName",
            type: "input",
            message: (chalk.blue.bold("Enter Student Name: ")),
        },

        {
            name: "course",
            type: "list",
            message: (chalk.red.bold("Enter Student Course: ")),
            choices: ["Data science","Web Developer","Artifical Intellegence"],

        },

        


    ]);
    if(student.course === "Web Developer"){
        mybalance = 10000;
    }
    else if(student.course === "Data science"){
        mybalance = 20000;
    }
    else if(student.course === "Artifical Intellegence"){
        mybalance = 50000;
    } else{
        console.log(chalk.green.bold("Invalid course"));
    };
    let balance = mybalance;
    console.log(balance);
 // using inquirer next option
    let task = await inquirer.prompt([
        {
            name : "option",
            type : "list",
            message : chalk.blueBright.italic("select any one option"),
            choices : ["Exit","view status"],
 },

]);
if(task.option === "view status"){//console with chalk
    
    console.log(chalk.red.bold("===================="));
 console.log(chalk.bold.greenBright(` student name is ${student.studentName}\n student id is  ${id}\n your course is ${student.course} \n your balance is ${balance}`));
 console.log(chalk.red.bold("===================="));
}else{
console.log(chalk.yellowBright.bold("Exiting School Managment"));      
}
const startagain = await inquirer.prompt([
    {
type : "confirm",
name :"confirm",
message :chalk.yellow.bold("Do you want to continue"),
defalute : false
},
 ]);
 // do continue 
 if(startagain.confirm){
    continue;
 }
 else{
    break;
 }
 };



 

 



    