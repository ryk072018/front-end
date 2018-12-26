var songs = [{
        name: 'hello',
        score: 70
    },
    {
        name: 'hello2',
        score: 80
    },

    {
        name: 'hello3',
        score: 90
    },
]

function highScore(item, index, arr) {
    return item.score > 70;
}

songs.findIndex(highScore)