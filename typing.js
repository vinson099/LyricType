//retrieve lyric elements
const lyricDisplayElement = document.querySelector('.lyricDisplay')
const lyricInputElement = document.querySelector('.lyricInput');

// placeholder text using api
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
function getLyrics(){
    return fetch(RANDOM_QUOTE_API_URL)
        // convert api call to json
        .then(response => response.json())
        .then(data => data.content)
}


async function renderNewLyric(){
    const lyric = await getLyrics()
    lyricDisplayElement.innerText = ''
    // split lyric into array of chars
    lyric.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        lyricDisplayElement.appendChild(characterSpan)
    });
    // clear input
    lyricInputElement.value = ''
}

renderNewLyric()

// event listener to read inputs whenever the input changes
lyricInputElement.addEventListener('input', () => {
    //get all the different spans in the lyric
    const arrayLyric = lyricDisplayElement.querySelectorAll('span')
    const arrayValue = lyricInputElement.value.split('')
    
    // initialize correct tracker
    let correct = true

    arrayLyric.forEach((characterSpan, index) => {
        // retrieve each character from its span
        const character = arrayValue[index]
        console.log(arrayLyric[index])
        console.log(arrayValue[index])

        //if character has not been typed yet
        if(character === undefined){
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }

        // if the character matches
        else if (character === characterSpan.innerText){
            // mark as correct, reset incorrect tag
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }

        //if character doesnt match
        else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })

    if(correct) {
        renderNewLyric()
    }
})




