document.addEventListener('DOMContentLoaded', () => {
    const heartContainers = document.querySelectorAll('.heart-container');
    const statusText = document.getElementById('statusText');

    heartContainers.forEach((container, index) => {
        const heart = container.querySelector('.heart');
        let isBeating = true;

        container.addEventListener('click', () => {
            isBeating = !isBeating;

            // Alternamos la clase de latido y detenido
            heart.classList.toggle('beating', isBeating);
            heart.classList.toggle('stopped', !isBeating);

            // Mensaje de estado dinámico según los corazones activos
            if (statusText) {
                const stoppedCount = document.querySelectorAll('.heart.stopped').length;
                const totalCount = heartContainers.length;

                if (stoppedCount === totalCount) {
                    statusText.innerText = 'Los dos corazones están en pausa. Haz clic para revivirlos.';
                } else if (stoppedCount > 0) {
                    statusText.innerText = 'Un corazón está en pausa. Haz clic para revivirlo.';
                } else {
                    statusText.innerText = 'Haz clic en los corazones para detener o revivir su latido';
                }
            }
        });
    });
});