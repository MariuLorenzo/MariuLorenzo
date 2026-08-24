document.addEventListener('DOMContentLoaded', () => {
    const heartElement = document.getElementById('heartElement');
    const heartContainer = document.getElementById('heartContainer');
    const statusText = document.getElementById('statusText');
    
    let isBeating = true;

    heartContainer.addEventListener('click', () => {
        isBeating = !isBeating;

        // Alternamos clases de forma limpia
        heartElement.classList.toggle('beating', isBeating);
        heartElement.classList.toggle('stopped', !isBeating);

        // Actualizamos el texto descriptivo
        statusText.innerText = isBeating 
            ? 'Haz clic para detener el corazón' 
            : 'Haz clic para revivir el corazón';
    });
});