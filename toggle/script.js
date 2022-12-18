let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

if (toggleBtn && container) {
    toggleBtn.addEventListener('click', () => {
        container.classList.toggle('active')
    });
}