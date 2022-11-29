let arr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] ;
let brr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'] ;

setInterval(()=>{
    let d = new Date();
    let s = d.getSeconds() ;
    if (s<10)
        s='0'+s;
    document.getElementById('time').innerHTML = d.getHours()+':'+d.getMinutes()+':'+s;

    document.getElementById('day').innerHTML = arr[d.getDay()] +"  "+ d.getDate() + "  "+ brr[d.getMonth()] ;
},1000)

function bgplay(){
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();
}


document.addEventListener("keypress",(event)=>{
    bgplay() ;
})