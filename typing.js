//retrieve lyric elements
const lyricDisplayElement = document.querySelector('.lyric-display')
const lyricInputElement = document.querySelector('.lyric-input')

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
    // clear previous lyric
    lyricDisplayElement.innerText = ''
    // split lyric into array of words
    const words = lyric.split(' ')

    words.forEach(word =>{
        // split each word into array of chars
        const characters = word.split("")

        //add words to doc
        const wordSpan = document.createElement('span')
        wordSpan.innerText = word
        lyricDisplayElement.appendChild(wordSpan)

        //add space after each word
        const spaceSpan = document.createElement('span')
        spaceSpan.innerText = " "
        lyricDisplayElement.appendChild(spaceSpan)
    })

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

   
    // retrieve each word from its span
    let word = arrayLyric[index]
    const wordAmt = wordSpan.length

    // console.log(arrayLyric[index])
    // console.log(arrayValue[index])

    let spaceCount = 0
    while(spaceCount <= wordAmt){
        //count amount of spaces in lyricInput
        arrayValue.forEach(character => {
            if (character === ' ') {
                spaceCount++
            }
        })

        

    }



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

    if(correct) {
        renderNewLyric()
    }
})




