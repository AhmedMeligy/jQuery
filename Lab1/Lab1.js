$(function() {
    let intervalId;
    let slideshowPaused = false;

    function showNext() {
        const visibleImg = $('.container img:visible');

        visibleImg.fadeOut(1000, function() {
            const nextImg = $(this).next('img');

            if (nextImg.length === 0) {
                $('.container img:first-child').fadeIn(1000);
            } else {
                nextImg.fadeIn(1000);
            }
        });
    }

    intervalId = setInterval(function() {
        if (!slideshowPaused) {
            showNext();
        }
    }, 2000);

    $('.btn button').on('click', function() {
        slideshowPaused = !slideshowPaused;

        if (slideshowPaused) {
            clearInterval(intervalId);
        } else {
            intervalId = setInterval(showNext, 2000);
        }
    });
});