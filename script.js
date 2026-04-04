const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        faqItems.forEach(el => {
            if (el === item) {
               item.classList.toggle('active');
            }
        });
        
    });
});
