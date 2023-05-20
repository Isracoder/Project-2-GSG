
const prompt = require("prompt-sync")({ sigint: true });

class Task {
    
    printTask =  function(){
        console.log("-----------------");
        console.log(`The task has an id of : ${this.id}`) ;
        console.log(`The task description is : ${this.description}`) ;
        console.log(`It has a priority of ${this.priority}`) ;
        console.log(`The due date is ${this.dueDate}`) ;
        console.log(`The task is ${this.complete ? "" : "not "}completed`);
        console.log("-----------------");
    }
}
// default values
let id = 1 ;
Task.prototype.dueDate = "4/5/2023" ;
Task.prototype.priority = 4 ;// low priority 1 , high priority 5 , 1-5
Task.prototype.desc = "Finishing the project"
Task.prototype.id = id ;
let tasks = [] ;
let num = -1 ;
const main = function(){
    num = -1 ;
    num = printOptions(num) ;
    
    while (num < 1 || num > 9 || isNaN(num)){
        console.log("That was not an option , try again!") ;
        num = printOptions(num) ;
         
    }
    console.log() ;
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
        case 9 : 
            console.log("Thank you for using the program") ;
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~") ;
            console.log() ;
            break ;
        default : 
        console.log("not an option") ;
        break;
    }
}

while (num !== 9) main() ; // keep running until the user chooses to exit



function sortTasksDue(){
    tasks.sort((a , b)=>{
        let firstDate = a.dueDate ;
        let secondDate = b.dueDate ;
        if (firstDate < secondDate)return -1 ;
        if (firstDate > secondDate)return 1 ;
        return 0;
    })
}
function sortByPriority(){ // sorting from 5 -> 1
    tasks.sort((a , b)=>{
        return a.priority- b.priority ;
    })
    tasks = tasks.reverse() ;
}
function clearAll(){
    tasks = [] ;
    console.log("All your tasks have been deleted") ;
    console.log() ;
}
function createNewTask(){
    //console.log("Enter the task priority") ;
    let priority = prompt("Enter the task priority as a number from 1-5 : ") ;
    let des = prompt("Enter the task description : ") ;
    //let des = "Finishing the project" ;
    let date = prompt("Enter the due date in dd/mm/y format : ") ;
    //let date = "5/6/2023" ;

    let temporary = new Task ;
    temporary.description = des ;
    temporary.dueDate = date ;
    temporary.priority = priority ;
    temporary.id = id ;
    id++ ;
    console.log("The new task you created : ") ;
    temporary.printTask() ;
    console.log() ;
    tasks.push(temporary) ;
}
function listTasks(){
    if (tasks.length == 0)console.log("There are no current tasks in your list") ;
    else {
        console.log("This is the current task list : ") ;
        tasks.forEach(task => task.printTask()) ;
    }
}
function listCompletedTasks(){
    let complete = tasks.filter(task => task.complete == true) ;
    if (complete.length == 0)console.log("There are no currently completed tasks") ;
    else {
        console.log("These are the completed tasks") ;
        complete.forEach(task => task.printTask()) ;
    }
}
function markAsDone(){
    listTasks(); 
    
    let number = prompt("Enter the id of the task you want to mark complete : ");
    tasks.filter(task => {
        if(task.id == number) return task })
        .forEach(task => task.complete = true )
}
function deleteTask(){
    listTasks() ;
    if (tasks.length == 0)return ;
    let num = prompt("Enter the id of the task you would like to delete : ") ;
    let ind = 0 ;
    tasks.forEach((task , index) => {
        if (task.id == num)ind = index ;
    })
    tasks.splice(ind , 1) ;
    console.log("The new task list ") ;
    listTasks() ;
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
    console.log("9) Exit the program") ;
    console.log("********************") ;
    
    
    
    num = prompt("What's your choice ? ")    

    
    return Number(num) ;
    
     
}
