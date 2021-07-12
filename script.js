document.addEventListener('DOMContentLoaded', () => {
    console.log(gsap);

    // gsap.to('.box', {
    //     delay: 1,
    //     duration: 1,
    //     x: 200,
    // })

    // gsap.to('.box', {
    //     delay: 2,
    //     duration: 1,
    //     y: 200,
    // })

    // gsap.to('.box', {
    //     delay: 3,
    //     duration: 1,
    //     x: 0,
    // })

    // gsap.to('.box', {
    //     delay: 4,
    //     duration: 1,
    //     y: 0,
    // })

    // Points for the users
    var points = 0;

    // To be able to be responsive also after resizing the page, we need to use the resize event from javascript

    // Timeline
    var tl = gsap.timeline({delay: 1, repeat: -1});
    tl.to('.box', {x: (window.innerWidth - 50), duration: 6, ease: 'linear'});
    tl.to('.box', {y: (window.innerHeight - 50), duration: 6, ease: 'linear'});
    tl.to('.box', {x: 0, duration: 6, ease: 'linear'});
    tl.to('.box', {y: 0, duration: 6, ease: 'linear'});

    // Selector for the Box with the click event
    document.querySelector('.box').addEventListener('click', () => {
        points = points + 1;
        console.log(points);
        tl.timeScale((points + 1) / 2);
        document.querySelector('.point-counter').innerHTML = points;
    })
});
