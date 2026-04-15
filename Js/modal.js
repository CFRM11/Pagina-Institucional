const modal = document.querySelector('.modal');
const botones = document.querySelectorAll('.btn-open-modal');
const closeButton = modal.querySelector('.close-Modal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});
