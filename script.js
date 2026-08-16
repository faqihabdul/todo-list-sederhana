// selection input task
const inputTask = document.querySelector('.input-task input[type="text"]');
const btnTask = document.querySelector('.btn-task');

// tasks
const kumpulanTask = document.querySelector('.kumpulan-task');

// tugas kosong container
const tugasKosong = document.querySelector('.isi-tugas');

// btn add event
function btnAddTask() {
    const input = inputTask.value;

    if (input === '') {
        alert("Masukan isi terlebih dahulu !");
        return;
    }

    tugasKosong.style.display = 'none';

    // membuat new element containernya
    const newTask = document.createElement('div');
    const taskContainer = document.createElement('div');
    newTask.appendChild(taskContainer);

    //  element didalam task-container
    const checkbox = document.createElement('input');
    const spanText= document.createElement('span');

    // btn close
    const closeBtn = document.createElement('span');

    // memasukan element
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(spanText);
    newTask.appendChild(closeBtn);

    // memberi atribut 
    newTask.setAttribute('class', 'task');
    taskContainer.setAttribute('class', 'task-container');
    checkbox.setAttribute('type', 'checkbox');
    spanText.textContent = input;
    closeBtn.textContent = 'x';
    closeBtn.setAttribute('class', 'hapus');

    // memasukannya di dalam kumpulan task
    kumpulanTask.appendChild(newTask);

    inputTask.value = "";
};

btnTask.addEventListener('click', btnAddTask);


// btn hapus
kumpulanTask.addEventListener('click', function(e){
    if (e.target.className === "hapus") {
        e.target.parentElement.style.display = 'none';
        return;
    }

    if (e.target.type === "checkbox") {
        const checkbox = document.querySelectorAll('.task-container input[type="checkbox"]');
        const taskText = document.querySelectorAll('.task-container span');

        checkbox.forEach(function(el,i){
            el.addEventListener('change', function(e) {
                console.log(e.target);
            if(e.target.checked) {
                taskText[i].classList.add('selesai');
            } else {
                taskText[i].classList.remove('selesai');
            }
        });
        });
    }
});
