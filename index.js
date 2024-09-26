document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.main_content');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;

            if (position < windowHeight - 100) {
                element.classList.add('fade-slide');
            }
        });
    });
});

