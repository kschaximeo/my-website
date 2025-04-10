const sidebar = document.getElementById('sidebar');
const toggleSidebarButton = document.getElementById('toggle-sidebar');

toggleSidebarButton.addEventListener('click', () => {
    // Если меню скрыто, показываем его
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});
// Переключение между вкладками
function showTab(tabName) {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}

// Сохранение настроек
function saveSettings() {
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let hobbies = document.getElementById('hobbies').value;
    let favoriteSubject = document.getElementById('favoriteSubject').value;
    let exams = document.getElementById('exams').value;

    alert("Настройки сохранены!");
}

// Сохранение записи в дневнике
function saveDiary() {
    let diaryEntry = document.getElementById('diary-entry').value;
    let diaryList = document.getElementById('diary-list');
    let newEntry = document.createElement('li');
    newEntry.textContent = diaryEntry;
    diaryList.appendChild(newEntry);
    document.getElementById('diary-entry').value = ''; // Очищаем поле после сохранения
}

// Обработчик отправки сообщения
function sendMessage(input) {
    const userInput = input || document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user'); // Отображаем сообщение пользователя

        // Очистка поля ввода
        document.getElementById('userInput').value = "";

        // Ответ от чат-бота
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            displayMessage(botResponse, 'bot');
        }, 1000); // Задержка для улучшения восприятия

        // Увеличиваем окно чат-бота
        expandChatbox();
    }
}

// Ответы чат-бота на различные вопросы
function getBotResponse(input) {
    const responses = {
        "что ты умеешь?": "Я могу помочь с курсами, расписанием, дневником и многим другим.",
        "какие курсы есть?": "У нас есть курсы по математике, физике, химии и информатике.",
        "как записаться?": "Перейди в раздел 'Курсы' и выбери нужный курс.",
        "привет": "Привет! Чем могу помочь?",
        "что нового?": "У нас много новых курсов и обновлений! Попробуй ознакомиться с расписанием.",
        "расскажи о платформе": "Платформа ПоступAI предоставляет курсы для подготовки к экзаменам и повышения уровня знаний."
    };

    input = input.toLowerCase().trim(); // Нормализуем ввод

    return responses[input] || "Извините, я не понял ваш запрос. Попробуйте переформулировать.";
}

// Функция для отображения сообщений
function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = sender === 'bot' ? 'cat-avatar.png' : 'user-avatar.png';

    const messageText = document.createElement('p');
    messageText.textContent = message;

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Прокрутка вниз
}

// Функция для увеличения размера окна чат-бота при отправке сообщения
function expandChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.height = '400px'; // Увеличиваем высоту окна при отправке сообщения
    document.getElementById('chatbot-container').style.height = 'auto'; // Даем контейнеру возможность увеличиваться
}

// Функция для сворачивания окна чат-бота
function minimizeChatbot() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.height = '50px'; // Уменьшаем высоту окна при сворачивании
    document.getElementById('chatbot-container').style.height = '50px'; // Ограничиваем высоту контейнера
}

// Функция для закрытия чат-бота
function closeChatbot() {
    const chatbox = document.getElementById('chatbot-container');
    chatbox.style.display = 'none'; // Скрываем чат
}

// Функция для открытия и закрытия чат-бота
function toggleChatbot() {
    const chatbox = document.getElementById('chatbot-container');
    const currentHeight = chatbox.style.height;

    if (currentHeight === '50px' || currentHeight === '') {
        chatbox.style.height = '400px'; // Разворачиваем чат
        expandChatbox(); // Увеличиваем окно
    } else {
        minimizeChatbot(); // Сворачиваем чат
    }
}

// Привязка обработчика для кнопки "Отправить"
document.getElementById('sendButton').addEventListener('click', function() {
    sendMessage(); // Отправляем сообщение при клике на кнопку
});

// Обработчик нажатия клавиши Enter для отправки сообщения
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage(); // Отправляем сообщение, если нажата клавиша Enter
    }
});


// Функция для сохранения настроек
function saveSettings() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const hobbies = document.getElementById('hobbies').value;
    const favoriteSubject = document.getElementById('favoriteSubject').value;
    const exams = document.getElementById('exams').value;

    // Здесь можно сделать запрос на сервер или сохранить в локальном хранилище
    alert('Настройки сохранены!');
}

// Функция для сохранения записи в дневник
function saveDiary() {
    const diaryEntry = document.getElementById('diary-entry').value;
    const diaryList = document.getElementById('diary-list');

    const newEntry = document.createElement('li');
    newEntry.textContent = diaryEntry;
    diaryList.appendChild(newEntry);
    
    // Очищаем поле для ввода
    document.getElementById('diary-entry').value = '';
}
// Данные для расписания (например, они могут приходить с сервера)
let schedule = [
    { subject: 'Математика', day: 'Понедельник', time: '09:00' },
    { subject: 'Физика', day: 'Вторник', time: '11:00' },
    { subject: 'Химия', day: 'Среда', time: '13:00' }
];

// Функция для отображения расписания
function displaySchedule() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = ''; // Очистить список

    schedule.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        
        const subject = document.createElement('h4');
        subject.textContent = item.subject;

        const time = document.createElement('div');
        time.classList.add('time');
        time.textContent = item.time;

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Редактировать';
        editBtn.onclick = () => editSchedule(item);

        scheduleItem.appendChild(subject);
        scheduleItem.appendChild(time);
        scheduleItem.appendChild(editBtn);

        scheduleList.appendChild(scheduleItem);
    });
}

// Функция для добавления нового занятия
function addScheduleEvent(event) {
    event.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    schedule.push({ subject, day, time });
    
    displaySchedule();  // Обновить расписание
    toggleAddScheduleForm();  // Скрыть форму
}

// Функция для редактирования занятия
function editSchedule(item) {
    // Здесь можно добавить логику для редактирования элемента
    alert('Редактировать: ' + item.subject);
}

// Функция для отображения/скрытия формы добавления занятия
function toggleAddScheduleForm() {
    const form = document.getElementById('add-schedule-form');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Инициализация расписания при загрузке страницы
displaySchedule();
// Функция для переключения между секциями
function showSection(sectionId) {
    // Скрыть все секции
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Показать выбранную секцию
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Инициализация отображения главной страницы по умолчанию
showSection('home');
// Логика для чат-бота
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbox');
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');

chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

sendButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        displayMessage('Вы: ' + userInput, 'user');  // Сообщение пользователя
        document.getElementById('user-input').value = ''; // Очищаем поле ввода

        // Ответ бота
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            displayMessage('Бот: ' + botResponse, 'bot');  // Сообщение бота
        }, 1000); // Задержка для ответа бота
    }
});

// Функция отображения сообщений
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = sender === 'bot' ? 'avatar.png' : 'user-avatar.png'; // Используйте разные аватары для бота и пользователя

    const messageText = document.createElement('p');
    messageText.textContent = message;

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
}

function getBotResponse(input) {
    console.log("Получено сообщение:", input); // Логирование входящего сообщения
    const responses = {
        "что ты умеешь?": "Я могу помочь вам с курсами, расписанием и многим другим!",
        "какие курсы есть?": "Мы предлагаем курсы по математике, физике, химии и информатике.",
        "как записаться?": "Перейдите в раздел 'Курсы', выберите курс и заполните форму.",
        "привет": "Привет! Чем могу помочь?",
    };

    input = input.toLowerCase().trim();
    console.log("Обработанное сообщение:", input); // Логирование обработанного сообщения

    if (input.includes("курсы")) {
        return responses["какие курсы есть?"];
    } else if (input.includes("записаться")) {
        return responses["как записаться?"];
    } else if (input.includes("привет")) {
        return responses["привет"];
    }

    return responses[input] || "Извините, я не понял ваш запрос. Пожалуйста, уточните.";
}
