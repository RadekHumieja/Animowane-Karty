const img = document.querySelectorAll('img');

img.forEach((img) => {
    // Obsługa myszy
    img.addEventListener('mousemove', handleMove);

    // Obsługa dotyku
    img.addEventListener('touchmove', (e) => {
        // Zapobieganie domyślnemu zachowaniu przewijania ekranu
        e.preventDefault();

        // Dostęp do właściwości dotyku
        const touch = e.touches[0];
        handleMove(e, touch);
    }, { passive: false });

    function handleMove(e, touch = null) {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;

        // Użyj właściwości dotyku jeśli istnieje, w przeciwnym razie użyj myszy
        const offsetX = touch ? touch.pageX - img.getBoundingClientRect().left : e.offsetX;
        const offsetY = touch ? touch.pageY - img.getBoundingClientRect().top : e.offsetY;

        const x = offsetX - imgWidth / 2;
        const y = offsetY - imgHeight / 2;
        const zX = x / 7;
        const zY = y / 7;

        img.style.transform = `rotateY(${-zX}deg) rotateX(${zY}deg)`;
    }
});