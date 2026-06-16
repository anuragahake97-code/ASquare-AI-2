// Counters

let totalScans = 0;
let safeCount = 0;
let phishingCount = 0;

// History

let historyData = [];


// WEBSITE ANALYSIS

function checkURL(){

    let url =
    document.getElementById(
    "urlInput").value.toLowerCase();

    let result =
    document.getElementById(
    "result");

    let reason =
    document.getElementById(
    "reason");

    if(url===""){

        result.innerHTML =
        "⚠ Please enter a URL";

        result.style.color =
        "orange";

        return;

    }

    totalScans++;

    let suspiciousWords = [

        "login",

        "verify",

        "bank",

        "secure",

        "paypal",

        "account",

        "signin",

        "update"

    ];

    let phishing = false;

    let explanation = [];

    suspiciousWords.forEach(word=>{

        if(url.includes(word)){

            phishing = true;

            explanation.push(

            "Contains suspicious keyword: "

            + word

            );

        }

    });

    if(url.length > 30){

        explanation.push(

        "Long URL detected"

        );

    }

    if(!url.startsWith(

        "https://"

    )){

        explanation.push(

        "No HTTPS protection"

        );

    }


    // FINAL RESULT

    if(phishing){

        phishingCount++;

        result.innerHTML =

        "🔴 PHISHING WEBSITE DETECTED";

        result.style.color =

        "red";

    }

    else{

        safeCount++;

        result.innerHTML =

        "🟢 SAFE WEBSITE";

        result.style.color =

        "#00e676";

        explanation.push(

        "No suspicious activity detected"

        );

    }


    // AI EXPLANATION

    reason.innerHTML =

    explanation.join("<br>");


    // DASHBOARD

    document.getElementById(

    "total").innerHTML =

    totalScans;

    document.getElementById(

    "safe").innerHTML =

    safeCount;

    document.getElementById(

    "phishing").innerHTML =

    phishingCount;


    // HISTORY

    historyData.push({

        url:url,

        result:

        phishing ?

        "Phishing"

        :

        "Safe"

    });

    updateHistory();

}



// HISTORY FUNCTION

function updateHistory(){

    let list =

    document.getElementById(

    "historyList"

    );

    list.innerHTML = "";

    historyData.slice()

    .reverse()

    .forEach(item=>{

        list.innerHTML +=

        `

        <li>

        🌐 ${item.url}

        <br>

        ${item.result}

        </li>

        `;

    });

}



// CLEAR HISTORY

function clearHistory(){

    historyData = [];

    document.getElementById(

    "historyList"

    ).innerHTML = "";

}



// IMAGE PREVIEW

document.getElementById(

"imageUpload"

).addEventListener(

"change",

function(){

let file = this.files[0];

if(file){

let reader =

new FileReader();

reader.onload =

function(e){

let img =

document.getElementById(

"previewImage"

);

img.src =

e.target.result;

img.style.display =

"block";

}

reader.readAsDataURL(

file

);

}

});



// DARK MODE

document.getElementById(

"themeBtn"

).onclick =

function(){

document.body.classList

.toggle(

"light"

);

};