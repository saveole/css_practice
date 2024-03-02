function loadImage(id, tragetId) {
    var el = document.getElementById(id);
    var tragetEl = tragetId ? document.getElementById(tragetId) : el;
    var imageToLoad;
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } else {
        imageToLoad = el.currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            tragetEl.classList.add('is-loaded');
        };
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadImage('wallpaper');
    loadImage('picture-image', 'picture');
});