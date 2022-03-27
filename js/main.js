let currentTime = document.querySelector('.currentTime');
let userData = {
    resources: 1,
    resourcesPerClick: 1
};

(() => {
    setInterval(() => {
        currentTime.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
    

    if (localStorage.getItem('userData')) {
        userData = JSON.parse(localStorage.getItem('userData'));
    } else {
        let formDiv = document.querySelector('.formDiv');
        let userForm = document.createElement('form');
        let nameInput = document.createElement('input');
        userForm.classList.add('userForm');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'Enter your name');
        nameInput.setAttribute('name', 'userName');
        userForm.appendChild(nameInput);
        formDiv.appendChild(userForm);
        
    }
})();