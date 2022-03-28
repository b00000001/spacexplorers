let currentTime = document.querySelector('.currentTime');
let userData = {
  mining: false,
  resources: 1,
  resourcesPerClick: 1
};
const resourceGeneratorButton = document.querySelector(
  '.resourceGeneratorButton'
);

(() => {
  setInterval(() => {
    currentTime.innerHTML = new Date().toLocaleTimeString();
  }, 1000);

  resourceGeneratorButton.addEventListener('click', () => {
    userData.resources += userData.resourcesPerClick;
    if (userData.mining) {
      userData.mining = false;
    } else {
      userData.mining = true;
    }
    if (userData.mining) {
      setInterval(updateResources, 1000);
      console.log(userData);
    }
  });
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
    let userNameSubmitBtn = document.querySelector('.userNameSubmitBtn');
    userNameForm.setAttribute('style', 'display: block');
    userNameForm.addEventListener('submit', (e) => {
      userData.userName = e.target.userName.value;
      localStorage.setItem('userData', JSON.stringify(userData));
      userNameForm.style.display = 'none';
      userNameSubmitBtn.onclick = getUserName;
      document.querySelector('.userName').innerHTML = userData.userName;
    });
  }

  const updateResources = () => {
    let resourceAmt = document.querySelector('.resourceAmt');
    userData.resources += userData.resourcesPerClick;
    resourceAmt.innerHTML = userData.resources;
  };
})();
