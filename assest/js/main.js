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


if (!customElements.get('show-more-button')) {
    customElements.define(
      'show-more-button',
      class ShowMoreButton extends HTMLElement {
        constructor() {
          super();
          const button = this.querySelector('button');
          button.addEventListener('click', (event) => {
            this.expandShowMore(event);
            const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
            if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
              nextElementToFocus.querySelector('input').focus();
            }
          });
        }
        expandShowMore(event) {
          const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
          const parentWrap = parentDisplay.querySelector('.parent-wrap');
          this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
          parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
          if (!this.querySelector('.label-show-less')) {
            this.classList.add('hidden');
          }
        }
      }
    );
  }