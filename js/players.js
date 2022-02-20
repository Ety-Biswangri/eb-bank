function setPlayerStyle(player) {
    player.style.border = '5px solid yellow';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'skyblue';
    // })
}

function addPlayer() {
    const playerContainers = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur iure dolor voluptates dolorem illum alias magnam praesentium distinctio delectus.</p>
    `
    setPlayerStyle(player);
    playerContainers.appendChild(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'skyblue';
    // })
}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else if (event.target.tagName.toLowerCase() == 'section') {
        event.target.style.backgroundColor = 'white';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})

// const firstPlayer = document.querySelector('#players .player:first-child');
// firstPlayer.style.backgroundColor = 'green';