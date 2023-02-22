// Web API's in JavaScript

/* 
    1) API's for manipulation documents - (Dom) Document Object Model Api, for manipulating html and css.

    2) API's to fetch data from server - fetch() and XMLHttpRequest()

    3) API's to draw graphics - <canvas> and Webgl.

    4) Audio and Video API's - HTMLMediaElement,   Web Audio API and WebRTC.

    5) Device API's - geolocation Api

    6) Client-Side Storage API's - Web Storage API, indexedDB API.

    7) Common 3'rd party API's - Twitter API, Youtube API, telegram API etc.


*/

// fetch() API
const verseChoose = document.getElementById('verse-choose');
const displayVerse = document.querySelector('pre');

verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value;
    updateDisplay(verse);
})


async function updateDisplay(verse){
    try {
        verse = verse.toLowerCase().replace(' ', '');
        let url = `verses/${verse}.txt`;
        let response = await fetch(url);
        if(!response.ok){
            throw new Error(`could not fetch ${url}`);
        }
        console.log(response);
        let data = await response.text();
        displayVerse.innerHTML = data;
       
    }
    catch(e){
        displayVerse.innerHTML = `could not fetch verse`
        console.log(e);
    }
    
}


// fetch API's Response objects.
/* 
    Response { 
        type: "basic", 
        url: "http://127.0.0.1:5501/Web%20API/verses/verse1.txt", 
        redirected: false, 
        status: 200, 
        ok: true, 
        statusText: "OK", 
        headers: Headers(9), 
        body: ReadableStream, 
        bodyUsed: false 
    }
*/

