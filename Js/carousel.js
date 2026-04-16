const track = document.querySelector('.carousel-track');
let current = 0;
const total = 3;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
}

let startX = 0;

track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;

    if (diff > 40) {
        goTo(current + 1);
        resetTimer();
    } else if (diff < -40) {
        goTo(current - 1);
        resetTimer();
    }
});

let timer = setInterval(() => goTo(current + 1), 3000);

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 3000);
}
