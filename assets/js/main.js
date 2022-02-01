setInterval(() => {
    const eventDate = new Date('feb 21, 2022 10:00').getTime()
    const nowDate = new Date().getTime()
    const dayGap = eventDate - nowDate
    const days = Math.floor(dayGap / (1000*60*60*24));
    const hours = Math.floor(dayGap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(dayGap % (1000 * 60 * 60) / (1000*60))
    const seconds = Math.floor(dayGap % (1000 * 60) / (1000))
    
    document.querySelector('.day').innerHTML = days;
    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.minute').innerHTML = minutes;
    document.querySelector('.second').innerHTML = seconds;

},1000)
