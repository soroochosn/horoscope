signs = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","That is not a valid date"]
messages = ["make use of your good people skills, it's your only good skill","you will have a bad year, but your going to have to get through it", "do not be afraid of the past, confront the future","enjoy the year while it lasts, talk to lots of different people", "you're a Hamroll", "you've got glory waiting", "your an amazing person", "your a paigon, don't worry about what it means", "it's looking bad", "you are great", "your a peng ting","your the next ER7", "Please enter a valid date"  ]
images = ["image/Capricorn.jpg","image/Aquarius.jpg","image/Pisces.jpg","image/Aries.jpg","image/Taurus.jpg","image/Gemini.jpg","image/Cancer.jpg","image/Leo.jpg","image/Virgo.jpg","image/Libra.jpg","image/Scorpio.jpg","image/Sagittarius.jpg",""]



function go(){
    var month = document.getElementById("month").value
    console.log(month);
    var day = document.getElementById("day").value
    console.log(day);
    var name = document.getElementById("name").value
    var signNum = determineSign(day,month);
    var userSign=signs[signNum];
    var userMessages=messages[signNum];
    var userImages=images[signNum];

    document.getElementById("sign").innerHTML = userSign;
    document.getElementById("message").innerHTML = isBirthday(month,day) + name + ", "  +userMessages;
    document.getElementById("image").src = userImages;
}

function determineSign(day,month) {
    if((month == 1 && day >= 30) || (month == 3 && day == 31) || (month==5 && day == 31) || (month == 8 && day == 31) || month == 10 && day == 31) {
        return 12;
    }

    if ((month == 0 && day <= 19) || (month == 11 && day >= 22)) {
        return 0;
    }

    if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
        return 1;
    }

    if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
        return 2;
    }

    if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
        return 3
    }

    if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
        return 4;
    }

    if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return 5;
    }

    if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
        return 6;
    }

    if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
        return 7;
    }

    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return 8;
    }

    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return 9;
    }

    if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
        return 10;
    }

    if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
        return 11;
    }



}
function isBirthday(month,day){
    var mensaje="Happy Birthday ";
    var d= new Date();
    var today = d.getDate();
    var mes = d.getMonth();
    if(month==mes && day==today){
        return mensaje;

    }else{
        return "";
    }
}