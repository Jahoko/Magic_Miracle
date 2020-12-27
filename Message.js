// File with scripted Messages

const moment = require("moment");

function createMessage(){

    // Erstelle ein zugällig generiertes Datum innerhalb des nächsten Jahres an dem Ereignis auftritt 
    const dateStart=new Date();  
    const endDate=new Date(2021,11,31,23,59,59)
    let date = new Date(+dateStart + Math.random()*(endDate - dateStart));
    //console.log(dateStart.toString(), endDate.toString(), date.toString())

    fortuneArray=['Geld', 'Glück', 'Gesundheit', 'Weisheit', 'Liebe', 'Freude', 'ein Lächeln', 'einer Chance']

    console.log('Am ' + new Intl.DateTimeFormat('de').format(date) + ' wird das Leben Dir ' + fortuneArray[Math.floor(Math.random()*8)] + ' schenken!')
    //A new comment
    

    
}
createMessage();

