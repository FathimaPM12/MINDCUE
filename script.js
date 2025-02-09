
document.getElementById('add-reminder-btn').addEventListener('click', function () {
    const reminderInput = document.getElementById('reminder-input');
    const reminderText = reminderInput.value.trim(); 

    if (reminderText === '') {
        alert('Please enter a reminder!');
        return;
    }

    const reminderList = document.getElementById('reminder-list');
    const li = document.createElement('li');
    li.textContent = reminderText;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        reminderList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    
    reminderList.appendChild(li);

    
    reminderInput.value = '';
});


document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim(); 

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });


    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    
    taskInput.value = '';
});

document.getElementById('Tadd-reminder-btn').addEventListener('click', function () {
    const reminderInput = document.getElementById('Treminder-input');
    const reminderText = reminderInput.value.trim(); 

    
    if (reminderText === '') {
        alert('Please enter a reminder!');
        return;
    }

    const timerInput = document.getElementById('Ttimer-input');
    const timerDuration = parseInt(timerInput.value.trim(), 10); 

    
    if (isNaN(timerDuration) || timerDuration <= 0) {
        alert('Please enter a valid timer duration!');
        return;
    }

    const reminderList = document.getElementById('Treminder-list');
    const li = document.createElement('li');
    li.textContent = reminderText;

    // Create timer display
    const timerDisplay = document.createElement('span');
    timerDisplay.classList.add('timer');
    timerDisplay.textContent = `Time left: ${timerDuration}s`;
    li.appendChild(timerDisplay);

    // Start countdown timer
    let countdown = timerDuration;
    const interval = setInterval(function () {
        countdown -= 1;
        timerDisplay.textContent = `Time left: ${countdown}s`;

        if (countdown <= 0) {
            clearInterval(interval);  // Stop the timer when it hits 0
            timerDisplay.textContent = 'Time is up!';
            alert(`Reminder: ${reminderText} is due!`);
        }
    }, 1000); // Update every second

    // Create delete button for the reminder
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        clearInterval(interval);  // Stop the timer if reminder is deleted
        reminderList.removeChild(li);
    });

    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the reminder list
    reminderList.appendChild(li);

    // Clear the input fields
    reminderInput.value = '';
    timerInput.value = '';
});
