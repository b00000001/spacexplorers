let currentTime = document.querySelector('.currentTime');
let userData = {
  resources: 1,
  resourcesPerClick: 1
};

(() => {
  setInterval(() => {
    currentTime.innerHTML = new Date().toLocaleTimeString();
  }, 1000);

  const getUserName = () => {
    userData.userName = document.querySelector('.nameInput');
    let pEl = document.createElement('p');
    let infoDivTop = document.querySelector('.infoDivTop');
    pEl.innerHTML = `Welcome ${
      JSON.parse(localStorage.getItem('userData')).userName
    }
    <br>    
    You have just started your first Asteroid mining company!
    `;
    infoDivTop.insertBefore(pEl, infoDivTop.firstChild);
  };

  if (localStorage.getItem('userData')) {
    userData = JSON.parse(localStorage.getItem('userData'));
    getUserName();
  } else {
    let userNameForm = document.querySelector('.userNameForm');
    userNameForm.setAttribute('style', 'display: block');
    userNameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      userData.userName = e.target.userName.value;
      localStorage.setItem('userData', JSON.stringify(userData));
      userNameForm.style.display = 'none';
      document.querySelector('.userName').innerHTML = userData.userName;
    });
  }
})();
