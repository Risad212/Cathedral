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


/* =====================================================
		SCROLL TOP BUTTON [SHOW & HIDE & CLICKING]
	===================================================== */
const scrollBtn = document.getElementById('strollTop')
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (window.pageYOffset >= 1000 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* =====================================================
// 		toggle collapse button
===================================================== */
$(document).ready(function(){
  $("#collapse-button").click(function(){
    $("#showCollapse").slideToggle()
  });
});



// Style Switcher
//--------------------------
document.getElementById('colors').addEventListener('change', (e) =>{
   const color = e.target.value
   let getMainStyle = document.querySelector(':root')
   getMainStyle.style.setProperty('--main-color', color);
})




