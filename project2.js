const readline = require('readline') ;
let r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}
) ;
//const prompt = require('prompt-sync')() ;
class Task {
    // constructor(  priority , dueDate , description){
    //     this.priority = Number(priority) ;
    //     this.dueDate = dueDate ;
    //     this.description = description ;
    //     this.complete = false ;
    // }
    printTask =  function(){
        console.log(`The task description is : ${this.description}`) ;
        console.log(`It has a priority of ${this.priority}`) ;
        console.log(`The due date is ${this.dueDate}`) ;
        console.log(`The task is ${this.complete ? "" : "not "}completed`);
    }
}
Task.prototype.dueDate = "4/5/2023" ;
Task.prototype.priority = 4 ;// low priority 1 , high priority 5 , 1-5
Task.prototype.desc = "Finishing the project"

let tasks = [] ;
const main = function(){
    let num = -1 ;
    num = printOptions(num) ;
    
    // while (num < 1 || num > 8){
    //     console.log("*") ;
    //     num = printOptions(num) ;
    //     process.stdin.pause(); 
    //     if (num < 1 || num > 8)console.log("That was not an option , try again!") ;
    // }
    console.log(`num ${num}`) ;
    console.log("hi") ;
    switch(num){
        case 1 : 
            createNewTask() ;
            break;
        case 2 :
            listTasks() ;
            break;  
        case 3 : 
            listCompletedTasks(); 
            break; 
        case 4 : 
            markAsDone() ;
        break ;
        case 5 : 
            deleteTask() ;
        break ;
        case 6 : 
            sortTasksDue() ;
        break ;
        case 7 : 
            sortByPriority() ;
        break ;
        case 8 : 
            clearAll() ;
        break; 
        default : 
        console.log("not an option") ;
        break;
    }
}

main() ;
function sortTasksDue(){
    tasks.sort((a , b)=>{
        let firstDate = a.dueDate ;
        let secondDate = b.dueDate ;
        if (firstDate < secondDate)return -1 ;
        if (firstDate > secondDate)return 1 ;
        return 0;
    })
}
function sortByPriority(){
    tasks.sort((a , b)=>{
        return a.priority- b.priority ;
    })
    tasks = tasks.reverse() ;
}
function clearAll(){
    tasks = [] ;
}
function createNewTask(){
    console.log("Enter the task priority") ;
    let priority = 1 ;
    console.log("Enter the task description") ;
    let des = "Finishing the project" ;
    console.log("Enter the due date in dd/mm/y format : ") ;
    let date = "5/6/2023" ;
    //creating a task with defualt values until user input problem is fixed
    let temporary = new Task ;
    temporary.description = des ;
    temporary.dueDate = date ;
    temporary.priority = priority ;
    tasks.push(temporary) ;
}
function listTasks(){
    if (tasks.length == 0)console.log("There are no current tasks in your list") ;
    else {
        for (let i = 0; i < tasks.length; i++){
            tasks[i].printTask() ;
        }
    }
}
function listCompletedTasks(){
    let areComp = false ;
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].complete){
            areComp = true ;
            tasks[i].printTask() ;
        }
    }
    if (!areComp)console.log("There are no currently completed tasks") ;
}
function markAsDone(){
    listTasks(); 
    console.log("Enter the description of the task you want to mark complete") ;
    let desc = "userInput".toLowerCase() ;
    tasks.filter(task => {
        if(task.description.toLowerCase() == desc) return task })
        .forEach(task => task.complete = true )
}
function deleteTask(){
    listTasks() ;
    console.log("Enter the number of the task you would like to delete") ;
    let num = 1 ;
    if (num < tasks.length)tasks.splice(num-1 , 1) ;
}
function printOptions(num){
    console.log() ;
    console.log("********************") ;
    console.log("Welcome to JS TO-DO APP")
    console.log("********************") ;
    console.log("Select an option : ") ;
    console.log("1) Add a new task")
    console.log("2) List all tasks")
    console.log("3) List completed tasks")
    console.log("4) Mark the task as done")
    console.log("5) Delete a task")
    console.log("6) Sort tasks by the due date")
    console.log("7) Sort tasks by priority")
    console.log("8) Clear all tasks")
    console.log("********************") ;
    //console.log("What's your choice ? ") ;
    let a = 1 ;
    // process.stdin.once("line" , function(data){
    //     a = Number(data) ;
    //     return a ;
        
    //     //process.exit() ;
    // }) ;
    // process.stdin.on('end' , function(){
    //     console.log("he") ;
    //     return a ;
    // })
    // process.on('exit' , function(){
    //     console.log("hiii") ;
    //     return Number(a) ;
    // })
    // const ac = new AbortController();
    // const signal = ac.signal;

    // r1.question("What is your choice ? " , (choice)=>{
    //         a = Number(choice) ;
    //         r1.close() ;
    //     })
    // signal.addEventListener('abort', () => {
    // console.log('The question timed out');
    // }, { once: true });

    // setTimeout(() => ac.abort(), 5000);

    console.log(`a ${a}`) ;
    // let a = prompt("What's your choice ? " , )
    // prompt.();
    // console.log(a) ;
    return Number(a) ;
    
    
    
    // process.stdin.on('-1' , data => {
    //     num = Number(data) ;
    //     console.log(num) ;
    //     console.log(data) ;
    //     console.log(process.stdin.read)
    //     return Number(num)
        
    // })
     
}
