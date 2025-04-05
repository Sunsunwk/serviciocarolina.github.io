document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modalImage.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});