const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.border = '5px solid yellow';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
}

function addPlayer() {
    const playerContainers = document.getElementById('players');
}

// const firstPlayer = document.querySelector('#players .player:first-child');
// firstPlayer.style.backgroundColor = 'green';