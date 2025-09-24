document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.closest('.faq-item');
            const answer = parentItem.querySelector('.faq-answer');
            const icon = parentItem.querySelector('.faq-toggle-icon');

            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                icon.textContent = '+';
                question.classList.remove('active');
            } else {
                // Fechar todas as outras respostas abertas
                document.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
                    openAnswer.classList.remove('show');
                    openAnswer.closest('.faq-item').querySelector('.faq-question').classList.remove('active');
                    openAnswer.closest('.faq-item').querySelector('.faq-toggle-icon').textContent = '+';
                });

                // Abrir a resposta clicada
                answer.classList.add('show');
                icon.textContent = '-';
                question.classList.add('active');
            }
        });
    });
});