const folderList = document.querySelector('.cases-list');
const folder = document.querySelectorAll('.case');
const accordeon = document.querySelectorAll('.case__accordeon');
const folderHead = document.querySelector('.case__heading');
const closeAcr = document.querySelectorAll('.closeBtn')


// folderList.addEventListener('click', (e)=>{
//     if (e.target.classList === '.case__heading'){
//         console.log('a')
//     }
// })


const inputFolderName = document.querySelector('.inputFolderName');
const addFolderBtn = document.querySelector('.addCaseBtn');

addFolderBtn.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.classList = 'case';
    //let folderHeading = document.querySelector(".heading"); folderHeading.innerHTML = inputFolderName.value;
    li.innerHTML = '<li class="case" onclick="inTask()"> <div class="case__heading"> <img src="./img/svg/folder_FILL0_wght400_GRAD0_opsz24.svg" alt=""><h2 class = "heading">Folder <span>↓</span></h2> </div> <div class="case__accordeon"> <div class="accordeon__input"> <input class = "taskName" type="text" name="" id="" placeholder="Input point name"> <button class="addCaseBtn btn addTask" onclick="newTask()">Add</button> </div> <ul class="accordeon__points"> </ul> <button class="accordeon__close closeBtn btn">Close</button> </div> </li>';
    folderList.appendChild(li);  
});

function inTask() {

    const taskList = document.querySelector('.accordeon__points');
    const addTask = document.querySelector('.addTask');
    const taskNameBox = document.querySelector('.taskName')
    const closeFolder = document.querySelector('.accordeon__close');
    const folderHead = document.querySelector('.case__heading');

    closeFolder.addEventListener('click', ()=>{
        closeFolder.parentElement.style.display = 'none'
    })

    console.log(closeFolder.parentElement)

    folderHead.addEventListener('click', ()=>{
        closeFolder.parentElement.style.display = 'flex'
    })
    

    function newTask () {
        addTask.addEventListener('click', ()=>{
                let task = document.createElement('li');
                task.classList = 'point';
                task.innerHTML = taskNameBox.value;
                taskList.appendChild(task)
            });
        }

    let taskElements = document.querySelector('.case')
    let closeBtn = taskElements.querySelector('.accordeon__close');
        closeBtn.addEventListener('click', ()=> {
            folderList.removeChild(li);
        });

newTask();
}

const logInButton = document.querySelector('.logBtn');
const isOpenFileManager = document.querySelector('.managerBtn');
const isOpenSystemInfo = document.querySelector('.systemBtn');
const isOpenQuiz = document.querySelector('.quizBtn');
const isOpenDevInfo = document.querySelector('.developerBtn');
const isCloseListOfApps = document.querySelector('.logOutBtn');

const logInContainer = document.querySelector('.login');
const fileManager = document.querySelector('.app');
const systemInfo = document.querySelector('.system');
const quiz = document.querySelector('.quiz');
const developer = document.querySelector('.developer');
const listOfApps = document.querySelector('.menu');
const closeBtn = document.querySelectorAll('.closeBtn');


isCloseListOfApps.addEventListener('click', ()=>{
    logInContainer.style.display = 'flex';
    listOfApps.classList.remove('active')
})

logInButton.addEventListener('click', ()=>{
    listOfApps.classList.add('active');
    logInContainer.style.display = 'none';
});

isOpenFileManager.addEventListener('click', ()=>{
    fileManager.classList.add('active')
    systemInfo.classList.remove('active')
    quiz.classList.remove('active');
    developer.classList.remove('active');  
    listOfApps.classList.remove('active');  
});

isOpenSystemInfo.addEventListener('click', ()=>{
    fileManager.classList.remove('active')
    systemInfo.classList.add('active')
    quiz.classList.remove('active');
    developer.classList.remove('active'); 
    listOfApps.classList.remove('active');
})

isOpenQuiz.addEventListener('click', ()=>{
    fileManager.classList.remove('active')
    systemInfo.classList.remove('active')
    quiz.classList.add('active');
    developer.classList.remove('active'); 
    listOfApps.classList.remove('active');
})

isOpenDevInfo.addEventListener('click', ()=>{
    fileManager.classList.remove('active')
    systemInfo.classList.remove('active')
    quiz.classList.remove('active');
    developer.classList.add('active'); 
    listOfApps.classList.remove('active');
})

closeBtn.forEach((Element)=>{
    Element.addEventListener('click',()=> {
        Element.parentElement.parentElement.classList.remove('active');
        listOfApps.classList.add('active')
    })
})


const systemInfoBox = document.querySelector('.system__info')
const select = document.querySelector('.select-system');

select.addEventListener('click', ()=>{

    if(select.value === '1'){
        let selectIn = document.createElement('select');
        selectIn.classList = "select-version-windows active";
        selectIn.innerHTML = '<option value="1">10</option> <option value="2">8.1</option> <option value="3">7</option>'
        systemInfoBox.appendChild(selectIn);
        document.querySelectorAll('.select-version-macOs').forEach((Element)=>{
            Element.classList.remove('active');
        }) 
        document.querySelectorAll('.select-version-linux').forEach((Element)=>{
            Element.classList.remove('active');
        }) 
    }
    else if (select.value === '2'){
        let selectIn = document.createElement('select');
        selectIn.classList = "select-version-linux active";
        selectIn.innerHTML = '<option value="1">Ubuntu</option> <option value="2">Arch</option> <option value="3">CentOs</option>'
        systemInfoBox.appendChild(selectIn);

        document.querySelectorAll('.select-version-windows').forEach((Element)=>{
            Element.classList.remove('active');
        })
        document.querySelectorAll('.select-version-macOs').forEach((Element)=>{
            Element.classList.remove('active');
        }) 

    } else if (select.value === '3'){
        let selectIn = document.createElement('select');
        selectIn.classList = "select-version-macOS active";
        selectIn.innerHTML = '<option value="1">Monterey</option> <option value="2"> Big Sur</option> <option value="3"> Catalina</option>'
        systemInfoBox.appendChild(selectIn);
        document.querySelectorAll('.select-version-linux').forEach((Element)=>{
            Element.classList.remove('active');
        })
        document.querySelectorAll('.select-version-windows').forEach((Element)=>{
            Element.classList.remove('active');
        })
    }
})

    

























