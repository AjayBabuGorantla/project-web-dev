document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('fixed-top');
            navbarHeight = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbarHeight + 'px';
        }
        else{
            document.getElementById('navbar').classList.remove('fixed-top');
            // document.body.style.paddingTop = '0';
        }
    })
})