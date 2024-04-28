window.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.charts-bar .bar');
    const targets = [85, 80, 75, 70, 60]; 

    bars.forEach((bar, index) => {
        const targetWidth = targets[index];
        let currentWidth = 0;

        const interval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
            } else {
                currentWidth++;
                bar.style.width = currentWidth + "%";
            }
        }, 10);
    });

    const sectionTitle = document.querySelector('.section-title-portfolio');

    setInterval(function() {
        sectionTitle.style.visibility = (sectionTitle.style.visibility == 'hidden' ? 'visible' : 'hidden');
    }, 500); 

    const form = document.getElementById('contact'); 

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const yourName = document.getElementById('fullname');
        const yourEmail = document.getElementById('email');
        const yourMessage = document.getElementById('message');
        
        yourName.value = "";
        yourEmail.value = "";
        yourMessage.value = "";
    });
});
