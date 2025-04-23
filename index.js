
// import cats object array
import {catsData} from "/data.js"

//take control of div with emotion-radio id
const emotionRadios = document.getElementById("emotion-radios")

function getEmotionsArray(cats){

    const emotionsArray = []
    
    //iterate through the cats object array
    for (let cat of cats){
        //push each emotion to the emotionsArray
        for (let emotion of cat.emotionTags){
            //if the emotion array does not include the emotion then push the emotion to the array
            if (!emotionsArray.includes(emotion)){
            emotionsArray.push(emotion)
            }
        }
        
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    
    //iterate through each emotion to add to radioItems
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`
    }
    //update the HTML to reflect the radioItems
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
