// Sticky Header
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('.main-header').addClass('header-fixed');
    }
    if ($(window).scrollTop() < 11) {
        $('.main-header').removeClass('header-fixed');
    }
});

// Dark Mode
const options = {
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: false // default: true
}
  
const darkmode = new Darkmode(options);

darkmode.showWidget();

// Get the Current Year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();



const shareBtn = document.getElementById('share');

shareBtn.onclick = async (filesArray) => {
    if (navigator.canShare) {
        navigator.share({
            url: 'https://gitmarkpaul.github.io/portfolio-dev/',
            title: "Hi!, I'm Mark Paul Cañeda, a Full Stack web developer",
            text: 'A goal-oriented Full Stack Web Developer with strong commitment to collaboration and problem-solving.',
        })
    }
}



