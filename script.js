document.getElementById('dropdown').addEventListener('click', function () {
    document.querySelector('.nav-bar').classList.toggle('active');
});

window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.scrollY > 15) { 
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }
    
    let img = document.querySelector('.static'); 
    if (window.scrollY > 0) { 
        img.classList.add('sticky2'); 
    } else {
        img.classList.remove('sticky2'); 
    }

    const scrollToTop = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500 ) {
        scrollToTop.style.display = "block"
    } else {
        scrollToTop.style.display = "none"
    }
};

let scrollToTop = () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
    } );
}


let scrollLeft = () => {
    document.getElementById("trustedImg").scrollBy( { left: -100, behavior: "smooth" } )
}


    