        let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');
        let text1 =  document.querySelector('.top-header-text-one');
        let text2 =  document.querySelector('.top-header-text-two');
    
        const bgimg = document.querySelector('.parallax');
        const section = document.querySelector('section');
        window.addEventListener('scroll', function () {
           var scales = bgimg.style.scale = 100 + window.pageYOffset / 45 + "%";})

// ----------------------------------------------------------------------------

prev.addEventListener('click', () => {
    text1.classList.add('active');
    console.log('ishlayabdi');
    text2.classList.add('active');
    text1.style.display = 'none';

});
prev.addEventListener('click', () => {
});
next.addEventListener('click', () => {
    text2.classList.remove('active');
    text1.style.display = 'block';
});