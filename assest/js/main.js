let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');
        let img = document.querySelectorAll('.slider-img img');
        
        console.log(prev);
        console.log(next);
        console.log(img);
        let i = 0;

        next.onclick = function () {
            img[i].style.display = 'none'
            i++
            if(i >= img.length){
                i = 0;
            }
            console.log(i)
            img[i].style.display = 'block'
        }
        prev.onclick = function () {
            img[i].style.display = 'none'
            i--
            if(i == -1){
                i = img.length - 1
            }
            console.log(i)
            img[i].style.display = 'block'
        }
        console.log(img);