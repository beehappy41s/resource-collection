$(window).stellar();
var win = $(window),
	nav = $('header'),

	pos = nav.offset().top,
	sticky = function() {
		win.scrollTop() > pos ? nav.addClass('sticky') : nav.removeClass('sticky')
    
	}

win.scroll(sticky);


$(".mobile").click(function() {
	$("nav").slideToggle();
});

var menu = $("nav");
jQuery(window).on('resize', function() {
	if (!jQuery(".mobile").is(":visible") && !menu.is(':visible')) {
		menu.css({
			'display': ''
		});
	}
});


var $doc = $(document),
    $body = $('.head'),
    $logo = $('.logo'),
    y = $doc.scrollTop(),
    color1 = 0,
    color2 = 0;

$doc.on('scroll', function(){
  y = $doc.scrollTop();
  color1 = y/10 - 0;
  color2 = color1 * 3 / 2;
  $body.css('background', 'hsla(' + color1 + ', 100%, 65%, 1)');
  $logo.css('background', 'hsla(' + color1 + ', 100%, 65%, 1)');
  $logo.css('color', 'hsla(' + color1 + ', 100%, 40%, 1)');
  $body.find('h1').css('color', 'hsla(' + color2 + ', 95%, 40%, 1)');
});
  


tday  =new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
tmonth=new Array("1","2","3","4","5","6","7","8","9","10","11","12");

function GetClock(){
d = new Date();
nday   = d.getDay();
nmonth = d.getMonth();
ndate  = d.getDate();
nyear = d.getYear();
nhour  = d.getHours();
nmin   = d.getMinutes();
nsec   = d.getSeconds();

if(nyear<1000) nyear=nyear+1900;

     if(nhour ==  0) {ap = "am";nhour = 12;} 
else if(nhour <= 11) {ap = "am";} 
else if(nhour == 12) {ap = "pm";} 
else if(nhour >= 13) {ap = "pm";nhour -= 12;}

if(nmin <= 9) {nmin = "0" +nmin;}
if(nsec <= 9) {nsec = "0" +nsec;}


document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+""+ap+" - "+tmonth[nmonth]+". "+ndate+". "+nyear+"";
setTimeout("GetClock()", 1000);
}
window.onload=GetClock;

