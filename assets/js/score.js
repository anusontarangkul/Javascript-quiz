const scoreContainerEL = document.getElementById("score-container");

let orderedScores = [];

for (let i = 0, len = localStorage.length; i < len; ++i) {
    let initial = localStorage.key(i);
    let score = parseInt(localStorage.getItem(localStorage.key(i)));

    orderedScores.push([initial, score]);
}

orderedScores.sort(function (a, b) {
    return b[1] - a[1];
});

for (let initial of orderedScores) {
    let player = document.createElement("div")
    player.setAttribute("class", "player-score")
    player.innerHTML = `<p>${initial[0]}: ${initial[1]}</p>`;
    scoreContainerEL.append(player)
}


