document.getElementById('border').addEventListener('click', function () {
    const players = document.getElementById('players');
    players.style.border = '2px solid blue';
    players.style.padding = '10px';
    players.style.marginBottom = '10px';
})
document.getElementById('add-player').addEventListener('click', function () {
    const addPlayer = document.getElementById('players');
    let newDiv = document.createElement('div');
    newDiv.classList.add('player');
    newDiv.innerHTML = `
    <h2>player - 1</h2>
    <p>Lorem, ipsum dolor.</p>
    `
    addPlayer.appendChild(newDiv);
});
document.getElementById('add-background').addEventListener('click',function() {
    const players = document.getElementsByClassName('player');
    for(const player of players) {
        player.style.backgroundColor = 'gray';
        player.style.padding = '10px';
        player.style.margin = '10px';
    }
})

