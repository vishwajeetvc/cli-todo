import chalk from 'chalk'
console.clear();

const argv = process.argv[2] ?? '';
if(argv.includes('help')){
  help();
  process.exit()
} 

const tasks = [
  { title : "Add tasks", isDone : false },
];

ui();

const readStream = process.stdin;

readStream.on('data', (chunk)=>{
  const commandLine = chunk.toString().trim();
  const command = commandLine.split(' ')[0];

  console.log(command);
  const task = commandLine.split(' ').slice(1).join(' ').trim();

  switch( command ) {
    case 'add':
      if(!task) {
        console.clear();
        console.log("--> Task name is required!");
        setTimeout(()=>{
          console.clear();
          ui()
        } , 200);
        break;
      }
      add(task, tasks);
      ui();
      break;
    case 'list':
      console.clear();
      welcome();
      show(tasks);
      break;
    case 'done' : 
      makeDone(task);
      ui();
      break;
    case 'delete':
      del(task);
      ui();
      break;
    case 'exit':
      readStream.destroy();
      console.clear();
      console.log("See you soon!")
      break;
    default :   
      console.log("DEFAULT CASE CALLED")
      ui();
      break;
  }

})

function del(id){
  tasks.splice(id-1, 1);
}
function makeDone(id){
  tasks[+id-1].isDone = true;
}
function show(tasks){
    tasks.forEach( (task, index) =>{
      if(!task.isDone){
        console.log(chalk.rgb(255,255,0).bold(`${index+1}. [ ] ${task.title}`));
        return ;      
      }
      console.log(chalk.rgb(0,255,0).bold(`${index+1}. [✔] Finished ${task.title}`));
    })
}
function add(task, toTasks) {
  toTasks.push({title: task, isDone : false});
}

function ui(){
  console.clear();
  welcome();
  console.log();
  showPending();
  console.log();
  showCompleted();
}


function showPending(){
    console.log(" Pending Tasks:-");
    tasks.forEach( (task, index) =>{
      if(!task.isDone){
        console.log(chalk.rgb(255,255,0).bold(`${index+1}. [ ] ${task.title}`));
      }
    })
}

function showCompleted(){
  console.log(" Completed Tasks:-");
  tasks.forEach( (task, index) =>{
    if(task.isDone){
      console.log(chalk.rgb(0,255,0).bold(`${index+1}. [✔] Finished ${task.title}`));
    }
  })
}



function help(){
  console.clear();
  console.log();
  const str = ` This is a simple program of "To-Do List" created by Vishwajeet Kumar.`;
  console.log(chalk.rgb(255, 0, 0).bold(str));
  console.log();
  console.log(chalk.rgb(0,255,0).bold("  Commands      Descriptions "));
  console.log(" add <task>  : Add a new task");
  console.log(" list        : Show all tasks");
  console.log(" done <id>   : Mark a task as complete");
  console.log(" delete <id> : Remove a task");
  console.log(" exit        : Quite the app");
}

function welcome(){
  console.log(chalk.rgb(255, 0,0).bold(`

       ████████╗ ██████╗       ██████╗  ██████╗       ██╗     ██╗███████╗████████╗
       ╚══██╔══╝██╔═══██╗      ██╔══██╗██╔═══██╗      ██║     ██║██╔════╝╚══██╔══╝
          ██║   ██║   ██║█████╗██║  ██║██║   ██║█████╗██║     ██║███████╗   ██║   
          ██║   ██║   ██║╚════╝██║  ██║██║   ██║╚════╝██║     ██║╚════██║   ██║   
          ██║   ╚██████╔╝      ██████╔╝╚██████╔╝      ███████╗██║███████║   ██║   
          ╚═╝    ╚═════╝       ╚═════╝  ╚═════╝       ╚══════╝╚═╝╚══════╝   ╚═╝ 
  `));
}
