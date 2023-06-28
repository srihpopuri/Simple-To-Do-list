//Access
const taskInput= document.getElementById('task-input');
const addButton= document.getElementById('add-button');
const taskList= document.getElementById('task-list');

//storage array
let tasks =[];

//function to add tasks
function addTask(){
    const taskText= taskInput.value;
    if(taskText){
        //new task object
        const task ={
            id: Date.now(),
            text: taskText,
        };
        //add task
        tasks.push(task);
        //ypdate task
        updateTaskList();
        //clear task
        taskInput.value = '';
    }
}
// function to delete 
function deleteTask(id){
    tasks= tasks.filter(task=> task.id !==id);
    updateTaskList();
}
//update tasks function

function updateTaskList(){
    //clear existing tasks
    taskList.innerHTML='';
    // loop through array
    tasks.forEach((task)=> {
        const listItem= document.createElement('li');
        listItem.innerText=task.text;
        const deleteButton = document.createElement('button');
        deleteButton.innerText='Delete';
        deleteButton.addEventListener('click', ()=> deleteTask(task.id));
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}
addButton.addEventListener('click', addTask);