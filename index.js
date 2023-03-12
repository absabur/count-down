let eventName = document.querySelector(".event-name");
let eventName2 = document.querySelector(".event-name2");

let eventNameInput = document.querySelector("#event-name-input");

let overlay = document.querySelector(".overlay");

let detailsForm = document.querySelector(".details-form");




let displayEventDate = document.querySelector(".event-date");





// document.querySelector(".event-date").innerText = endDate;

let dateField = document.querySelector(".col");

let displayDate = dateField.querySelectorAll("input");

document.querySelector("#button").addEventListener("click",function(){
    let singleDigit = ["1","2","3","4","5","6","7","8","9"]
    let day = document.querySelector("#day").value;
    for (let i = 0 ; i < singleDigit.length ; i ++){
        if (day == singleDigit[i]){
            day = "0"+singleDigit[i]
        }
    }
    let year = document.querySelector("#year").value;
    
    let hour = document.querySelector("#hour").value;
    for (let i = 0 ; i < singleDigit.length ; i ++){
        if (hour == singleDigit[i]){
            hour = "0"+singleDigit[i]
        }
    }
    let minute = document.querySelector("#minute").value;
    for (let i = 0 ; i < singleDigit.length ; i ++){
        if (minute == singleDigit[i]){
            minute = "0"+singleDigit[i]
        }
    }
    let apm = document.querySelector("#apm").value.toUpperCase();
    let month = document.querySelector("#month").value;

    let montArr = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    let montArrS = ["1","2","3","4","5","6","7","8","9","10","11","12"]
    let montName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    for (let i = 0 ; i<montArr.length ; i++){
        if (month == montArr[i] || month == montArrS[i]){
            month = montName[i];
        }
    }
    if (year == "" || month == "" || day == "" || hour == "" || minute == "" || apm == ""){
        alert("Fill up all field to get proper countdown.")
    }else if (parseInt(month) > 12 || parseInt(day) > 31  || parseInt(hour) > 12 || parseInt(minute) > 60){
        alert("Provide the valid input.")
    }else{
        eventName.innerText = eventNameInput.value
        eventName2.innerText = eventNameInput.value
        let endDate = `${day} ${month} ${year} ${hour}:${minute} ${apm}`;
        displayEventDate.innerText = endDate
        
        overlay.style.display = "block"; 
        detailsForm.style.display = "none"; 

        function clock(){
            const end = new Date(endDate);
            const now = new Date();
            let diff = (end - now)/1000;
            
            if (diff < 0) return;

            displayDate[0].value = Math.floor(diff/3600/24);
            displayDate[1].value = Math.floor((diff/3600)%24);
            displayDate[2].value = Math.floor((diff/60)%60);
            displayDate[3].value = Math.floor((diff)%60);

        }
        clock();
        setInterval(() => {
            clock();
        }, 1000);

        var images = [
            'images/back0.jpg',
            'images/back1.jpg',
            'images/back2.jpg',
            'images/back3.jpg',
            'images/back4.jpg'
        ];
        
        var img = document.querySelector('.main');
        var index = 0;
        
        var updateImage = function() {
        
            if (index >= images.length) {
                index = 0;
            }
            
            // set the background image
            img.style.background = 'url(' + images[index] + ')';
            img.style.backgroundSize = 'cover';
            img.style.transition = 'all 2s';

            index++;
        }
        updateImage();
        setInterval(updateImage, 5000);
        
        setInterval(() => {
            var d = new Date();          
            var n = d.toLocaleString([], { hour12: true});
            document.querySelector(".current-time").innerText = `Current time: ${n}`;
        }, 1000);
        }
        
        
    
})


let toForm = document.querySelector(".to-form");
toForm.addEventListener("click",function(){
    location.reload(); 
})



