document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('#typing-text');
    const words = [
        'Data Science',
        'AI & Tech',
        'Business Intelligence',
        'Lean Six Sigma',
        'Market Intelligence'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayText = '';

        if (isDeleting) {
            // Deleting
            displayText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing
            displayText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        typingElement.textContent = displayText;

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to the next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});
