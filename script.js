// selection input task
const inputTask = document.querySelector('.input-task input[type="text"]');
const btnTask = document.querySelector('.btn-task');

// tasks
const checkbox = document.querySelector('.task-container input[type="checkbox"]');
const kumpulanTask = document.querySelector('.kumpulan-task');
const taskText = document.querySelector('.task-container span');

// tugas kosong container
const tugasKosong = document.querySelector('.isi-tugas');

// btn add event
btnTask.addEventListener('click', function() {
    const input = inputTask.value;
    tugasKosong.style.display = 'none';

    if (input === '') {
        alert("Masukan isi terlebih dahulu !");
        return;
    }


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
});

// checkbox event 
// checkbox.addEventListener('click', function() {
//     taskText.style.textDecoration = 'underline';
// });

// btn hapus
kumpulanTask.addEventListener('click', function(e){
    if (e.target.className === "hapus") {
        e.target.parentElement.style.display = 'none';
        return;
    }
});
