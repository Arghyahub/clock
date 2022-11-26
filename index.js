// alert("   For Best Experience Press F11     ")

let arr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] ;
let brr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'] ;
setInterval(()=>{
    let d = new Date();
    let s = d.getSeconds() ;
    if (s<10)
        s='0'+s;
    document.getElementById('time').innerHTML = d.getDate()+':'+d.getMinutes()+':'+s;

    document.getElementById('day').innerHTML = arr[d.getDay()] +"  "+ d.getDate() + "  "+ brr[d.getMonth()] ;

},1000)