function UpdateTime(){
    let date = new Date()
    let currentYear = date.getFullYear()
    let newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`)
    let currentDate = date
    let diff = newYear - currentDate
    let d = Math.floor(diff/1000/60/60/24)
    let h = Math.floor((diff/1000/60/60) % 24)
    let m = Math.floor((diff/1000/60) % 60)
    let s = Math.floor((diff/1000) % 60)
    document.getElementById('days').innerHTML = d<10?'0'+d:d
    document.getElementById('hours').innerHTML = h<10?'0'+h:h
    document.getElementById('minutes').innerHTML = m<10?'0'+m:m
    document.getElementById('seconds').innerHTML = s<10?'0'+s:s
}

setInterval(UpdateTime, 1000)

/*
1000ms = 1s
60s = 1m
60m = 1h
24h = 1day
*/