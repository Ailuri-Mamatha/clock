function currentDate(){
    var date=new Date();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="am";
    var dayImg=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg","image/img5.jpg","image/img6.jpg"]
    document.body.style.backgroundImage=`url()`
    var days=["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];
    document.querySelector("#day").innerHTML[day]
    day=days[day];
    var month=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    mo=month[mo];
    if(hh==0){
        hh=12;
    }
    if(hh>=12){
        am_pm="pm";
        if(hh>12){
            hh=hh-12;
        }
    }
    if(hh<10){
        hh=`0${hh}`
    }
    if(mm<10){
        mm=`0${mm}`
    }
    if(ss<10){
        ss=`0${ss}`
    }
    document.querySelector("#time").innerHTML=`${hh}:${mm}${am_pm}`
    document.querySelector("#date").innerHTML=`${dd}/${mo}/${yy}`
    document.querySelector("#sec").innerHTML=`${ss}`
    localStorage.setItem("currentTime",`${hh}:${mm}${am_pm}`)

  setTimeout(currentDate,1000)

}
currentDate();

var cont=document.querySelector("#containerHours");
for(i=1;i<=12;i++){
    var buttons=document.createElement("input");
    buttons.type="button"
    buttons.value=i;
    cont.appendChild(buttons)
    buttons.className="hrs"

}
var cont1=document.querySelector("#containerMins");
for(i=0;i<=59;i++){
    var buttons=document.createElement("input");
    buttons.type="button"
    buttons.value=i;
    cont1.appendChild(buttons)
    buttons.className="min"

}
function closewindow(){
    document.querySelector("#setAlarm").style.display="none"
}
function openwindow(){
    document.querySelector("#setAlarm").style.display="flex"

}
var allhrsButtons=document.querySelectorAll(".hrs");
for(i=0;i<=11;i++){
    allhrsButtons[i].addEventListener('click',function(){
        var userHours=allhrsButtons[this.value1].value
        localStorage.setItem("hrs",userHours);
    })

}
console.log(allhrsButtons)
var usermin;
var allminButtons=document.querySelectorAll(".min");
for(i=0;i<=59;i++){
    allminButtons[i].addEventListener('click',function(){
         usermin=allhminButtons[this.value].value
        localStorage.setItem("min",userHours);
    })

}
console.log(usermin)
console.log(allminButtons)


var pm;
function pmzone(){
    localStorage.setItem("am_pm","pm")
}
var aud=new Audio();
aud.src=""

function setAlarm(){
    var userHours=localStorage.getItem("hrs");
    if(userHours<10){
        userHours='0'+userHours
    }
    var usermin=localStorage.getItem("min");
    if(usermin<10){
        usermin='0'+usermin
    }
    var am_pm=localStorage.getItem("am_pm");
    var userTime=`${userHours}:${usermin} ${am_pm}`;
    console.log(userTime)
    var currentTime=localStorage.getItem("currentTime");

    if(userTime==currentTime){
        console.log("play alarm")
        aud. Play()
    }
    else{
        console.log("pause alarm")
    }
    console.log(currentTime)

    setTimeout(setAlarm,1000)

}
setAlarm()
